export default `
  type User {
    id: Int!
    firstName: String
    lastName: String
    fullName: String
  }

  type Product {
    id: Int!
    name: String
    description: String
    price: Int
    url: String
  }

  type Query {
    user: User
    products: [Product]
    product(id: Int!): Product
  }

  schema {
    query: Query
  }
`;
