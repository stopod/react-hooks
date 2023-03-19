import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

// StrictModeが有効だと2回レンダリングされるらしい
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
