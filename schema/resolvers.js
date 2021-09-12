const Cluster = require('../models/ClusterModel');
const Occupation = require('../models/OccupationModel');
const Pathway = require('../models/PathwayModel');
const Video = require('../models/VideoModel');

const resolvers = {
  Cluster: {
    occupations(parent){
      return Occupation.find({clusters: parent.clusterCode});
    },
  },
  Occupation: {
    clusters(parent){
      return Cluster.find({occupations: parent.code});
    },
    pathways(parent){
      return Pathway.find({occupations: parent.code});
    },
    videos(parent){
      return Video.find({occupations: parent.code});
    },
  },
  Pathway: {
    occupations(parent){
      return Occupation.find({pathways: parent.code});
    }
  },
  Video: {
    occupations(parent){
      return Occupation.find({videocode: parent.videocode});
    },
  },
  Query: {
    // GET ONE
    cluster(parent, args, context, info){
      if(args){
        return Cluster.findOne({clusterCode: args.clusterCode});
      }
    },
    occupation(parent, args, context, info){
      if(args.code){
        return Occupation.findOne({code: args.code});
      }
      if(args.pathways){
        return Occupation.findOne({pathways: [args.pathways]});
      }
    },
    pathway(parent, args, context, info){
      if(args){
        return Pathway.findOne({code: args.code});
      }
    },
    video(parent, args, context, info){
      if(args.videocode){
        return Video.findOne({videocode: args.videocode});
      }
    },
    //GET ALL
    clusters(parent, args, context, info){
      return Cluster.find();
    },
    occupations(parent, args, context, info){
      return Occupation.find();
    },
    pathways(parent, args, context, info){
      return Pathway.find();
    },
    videos(parent, args, context, info){
      return Video.find();
    }
  }
}
module.exports = resolvers;