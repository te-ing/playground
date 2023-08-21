import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { worker } from "./mocks/browser";

if (import.meta.env.MODE === "msw")
  worker.start({
    onUnhandledRequest: "bypass",
  });
console.log("import.meta.env.MODE", import.meta.env.MODE);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
