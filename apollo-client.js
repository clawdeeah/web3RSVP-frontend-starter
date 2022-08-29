import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/clawdeeah/web3rsvp-subgraph",
  cache: new InMemoryCache(),
});

export default client;