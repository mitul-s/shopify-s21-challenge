import React from 'react';
import ReactDOM from 'react-dom';
import ThemeContext from "./ThemeContext";
import App from './App';
import "./index.css";

console.log("Hi! 👋 It would be a dream to join the team at Shopify. Let's make it happen. :)");


ReactDOM.render(
  <ThemeContext>
      <App />
    </ThemeContext>,
  document.getElementById("root")
);
