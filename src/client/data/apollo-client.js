import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
// import { HttpLink } from "apollo-link-http";
import { ApolloLink } from "apollo-link";
import localStateResolvers from "./local-state/resolvers";
import localStateDefaults from "./local-state/defaults";
import { withClientState } from "apollo-link-state";
import { SubscriptionClient } from "subscriptions-transport-ws";
import { WebSocketLink } from "apollo-link-ws";

const wsClient = new SubscriptionClient("ws://localhost:8000/subscriptions", {
  reconnect: true
});

// Create a WebSocket link:
const wsLink = new WebSocketLink(wsClient);

const cache = new InMemoryCache();

const stateLink = withClientState({
  cache,
  resolvers: localStateResolvers,
  defaults: localStateDefaults
});

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([stateLink, wsLink])
});

export default client;
