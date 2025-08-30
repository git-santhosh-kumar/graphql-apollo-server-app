import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// Step 1: Define schema (GraphQL type definitions)
const typeDefs = `#graphql
    schema {
        query: Query
    }

    type Query {
        greeting: String
    }
`;

// Step 2: Define resolvers
const resolvers = {
  Query: {
    greeting: () => "Hello World 👋"
  }
};

// Step 3: Setup Apollo server with Express
async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: {
        port: 4000
    }
  });

  console.log(`🚀 Server ready at ${url}`);
}

startServer();