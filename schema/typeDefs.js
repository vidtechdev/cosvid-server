const { gql } = require('apollo-server-express');
// const { GraphQLObjectType } = require('graphql');


const typeDefs = gql`

  type Cluster {
    _id: String,
    clusterCode: String,
    title: String,
    description: String,
    occupations: [Occupation]
  }

  type Occupation {
    _id: String,
    code: String,
    title: String,
    description: String,
    videocode: String,
    videos: [Video],
    clusters: [Cluster],
    pathways: [Pathway]
  }

  type Pathway {
    _id: String,
    clusterCode: String,
    code: String,
    title: String,
    occupations: [Occupation]
  }

  type Video {
    _id: String,
    videocode: String,
    videotype: String,
    title: String,
    taxonomy: String,
    transcript: String,
    captions_en: String,
    captions_es: String,
    occupations: [Occupation]
  }

  type Query {
    clusters: [Cluster],
    cluster(clusterCode: String!): Cluster,
    occupations:[Occupation],
    occupation(code: String!): Occupation,
    pathways: [Pathway],
    pathway(code: String!): Pathway,
    videos: [Video],
    video(videocode: String!): Video
  }

  # type Mutation {}
  # type Subscription {}
`;
// export default typeDefs;
module.exports = typeDefs;