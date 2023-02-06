import ScriptMode from "react";
import ReactDom from "react-dom";
import App from "./App";

ReactDom.render(
  <ScriptMode>
    <App />
  </ScriptMode>,
  document.getElementById("root")
);
