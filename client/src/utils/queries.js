import {gql} from '@apollo/client'

export const GET_ME = gql`
    query me($user: ID, $username: String){
        _id
        username
        email
        bookCount
        savedBooks
    }
`;