import {gql} from '@apollo/client'

export const LOGIN_USER = gql`
    mutation login($username: String, $email:String){
        login(username:$username,email:$email){
            token
            user {
                _id
                username
                email
                bookCount
                savedBooks
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email:String!,$password:String!){
        addUser(username: $username, email: $email, password: $password){
            token
            user {
                _id
                username
                email
                bookCount
                savedBooks
            }
        }

    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($id:String,$description: String!,$bookId: String!,$image: String,$link: String,$title: String!){
        saveBook(id: $id, description: $description, bookId: $bookId, image: $image, link: $link, title: $title){
            user {
                _id
                username
                email
                bookCount
                savedBooks
            }
        }

    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook(id:String,bookId: String){
        removeBook(id: $id, bookId: $bookId){
            user{
                _id
                username
                email
                bookCount
                savedBooks
            }
        }
    }
`;
