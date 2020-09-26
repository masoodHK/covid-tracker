import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { GlobalProvider } from "./context/GlobalContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>,
  rootElement
);
