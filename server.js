const { ApolloServer } = require ('apollo-server-express');
const { 
  ApolloServerPluginInlineTrace,
  ApolloServerPluginLandingPageDisabled,
  ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');
const express = require('express');
const helmet = require('helmet');

const typeDefs  = require('./schema/typeDefs');
const resolvers  = require('./schema/resolvers');
const mongoose = require('mongoose');

require('dotenv').config();
const PORT = process.env.PORT || 1012;
const { db } = process.env;

 // Setting up and Connecting MongoDB using Mongoose
 mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
 mongoose.connection.on('error', error => console.log(error));
 mongoose.connection.once('open',() => {
   console.log('connected to database');
 });
 mongoose.Promise = global.Promise;

async function startServer() {
  // Express Server Setup
  const app = express();
  const apiRouter = require('./routes/api');
  const streamRouter = require('./routes/stream');

  // serve static files
  app.use(express.static('public'));
  // parse data
  app.use(express.json());

  app.use(helmet({
    contentSecurityPolicy: false,
  }));

  // Add Access-Control-Allow-Origin Headers
  app.use((req,res,next) => {
    const corsWhitelist = [
      'https://cosvid.vercel.app',
      'https://cosvid.herokuapp.com'
    ];
    if (corsWhitelist.indexOf(req.headers.origin) !== -1) {
    res.setHeader("Access-Control-Allow-Origin", req.headers.origin);  //"https://cosvid.herokuapp.com"
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    }
    next();
  }); 
  // initialize main routes
  app.use('/api', apiRouter);
  app.use('/stream', streamRouter);

 // TODO:
  // - error handling
  // - Auth
  
  app.use(function(err, req, res, next){
    res.status(422).send({error: err.message});
  });
  
  // GraphQL Server Setup
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    // playground: true,
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground(),
      // process.env.NODE_ENV === 'production'
      // ? ApolloServerPluginLandingPageDisabled()
      // : ApolloServerPluginLandingPageGraphQLPlayground(),
      ApolloServerPluginInlineTrace(),
    ],
  });

  //Starting GraphQL Server
  await apolloServer.start();
 
 // Including GraphQL Server into Express Server
  apolloServer.applyMiddleware({ app });

  await new Promise(resolve => app.listen(PORT, resolve));

};
startServer();



