import React from "react";
import ReactDOM from "react-dom"; // Importing ReactDOM
import App from "./App";

// Create a React root to render the app into the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the App component wrapped in a fragment
root.render(
    <>
        <App />
    </>
);
