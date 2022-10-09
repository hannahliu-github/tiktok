import React from "react";
import ReactDOM from "react-dom/client";

import Index from "./index"

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const theRoot = ReactDOM.createRoot(root);
    theRoot.render(<Index/>);
}); 