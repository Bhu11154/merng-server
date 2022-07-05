const postsResolvers = require('./post');
const usersResolvers = require('./user');
const commentsResolvers = require('./comment');

module.exports = {
    Post: {
        likeCount(parent){
            return parent.likes.length;
        },
        commentCount: (parent) => parent.comments.length
    },
    Query :{
        ...postsResolvers.Query
    },
    Mutation: {
        ...usersResolvers.Mutation,
        ...postsResolvers.Mutation,
        ...commentsResolvers.Mutation
    }
}