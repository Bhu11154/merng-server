const {ApolloServer} = require('apollo-server')
const mongoose = require('mongoose')
const {MONGODB} = require('./config')

const typeDefs = require('./graphql/typedefs');
const resolvers = require('./graphql/resolvers/index')

const PORT = process.env.port || 5000

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req}) => ({req})
});

mongoose.connect(MONGODB, {useNewUrlParser: true})
    .then(() => {
        console.log("DataBase connected");
        return server.listen({port : PORT});
    })
    .then((res) => {
        console.log(`Server Running at ${res.url}`);
    })
    .catch(err => {
        console.log(err)
    })

