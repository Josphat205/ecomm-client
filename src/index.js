import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <CookiesProvider>
          <App />
        </CookiesProvider>
      </Router>
    </Provider>
  </React.StrictMode>
);
