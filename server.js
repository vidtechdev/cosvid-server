const { ApolloServer } = require ('apollo-server-express');
const { ApolloServerPluginInlineTrace } = require('apollo-server-core');
const express = require('express');

const typeDefs  = require('./schema/typeDefs');
const resolvers  = require('./schema/resolvers');
const mongoose = require('mongoose');

const port = process.env.port || 1012;
require('dotenv').config();
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

  // Add Access-Control-Allow-Origin Headers
  app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  }); 
  // initialize main routes
  app.use('/api', apiRouter);
  app.use('/stream', streamRouter);

  // error handling
  // (...in process)

  
  app.use(function(err, req, res, next){
    res.status(422).send({error: err.message});
  });
  
  // GraphQL Server Setup
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    // plugins: [
    //   ApolloServerPluginInlineTrace(),
    // ],
  });

  //Starting GraphQL Server
  await apolloServer.start();

 // Including GraphQL Server into Express Server
  apolloServer.applyMiddleware({ app });

  await new Promise(resolve => app.listen(port, resolve));

  console.log(
    `Server ready at http://localhost:${port}`,
    `GraphQL available at http://localhost:${port}${apolloServer.graphqlPath}`
    );

  app.use((req, res) => {
   res.send('Hello from express server.');
  });
  
};
startServer();


