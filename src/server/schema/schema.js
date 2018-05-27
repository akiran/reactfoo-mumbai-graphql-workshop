export default `
  type User {
    id: Int!
    firstName: String
    lastName: String
  }

  type Query {
    user: User
  }

  schema {
    query: Query
  }
`;
