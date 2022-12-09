const {gql} = require('apollo-server-express')

const typeDefs = gql`
    type User {
        _id: ID
        username: String!
        email: String!
        bookCount: Number
        savedBooks: [Book]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Book {
        authors: [String]
        description: String!
        bookId: String!
        image: String
        link: String
        title: String!
    }

    type Query {
        me(user:ID,username:String): User
    }
    
    type Mutation {
        addUser(username: String!, email:String!,password:String!): Auth
        login(username: String, email:String): Auth
        saveBook(id:String,description: String!,bookId: String!,image: String,link: String.title: String!):Auth
        removeBook(id:String,bookId: String):User
    }
`;

module.exports = typeDefs;