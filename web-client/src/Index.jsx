import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {
  ApolloProvider,
  createNetworkInterface,
  ApolloClient
} from "react-apollo";
import "./styles/index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import { API_BASE_URL } from "./constants";

const networkInterface = createNetworkInterface({
  uri: API_BASE_URL
});

const client = new ApolloClient({
  networkInterface
});

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

registerServiceWorker();
