import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

function sum(a: number, b: number) {
  return a + b;
}

console.log(sum(1, 2));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
