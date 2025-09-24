import React from "react";
import { createRoot } from "react-dom/client";
//import App from "./App";
function Test() {
  return <p>Test</p>
}
createRoot(document.getElementById("root")).render(<Test />);
