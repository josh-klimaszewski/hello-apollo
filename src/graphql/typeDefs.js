export default `
type Todo {
    id: Int!
    text: String!
    completed: Boolean!
}

type Query {
  counter: Int
}

type Mutation {
    decrementCounter(unused: Boolean): Int
    incrementCounter(unused: Boolean): Int
    toggleTodo(id: Int!): Todo
}
`;
