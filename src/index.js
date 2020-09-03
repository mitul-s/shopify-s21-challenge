import React from 'react';
import ReactDOM from 'react-dom';
import ThemeContext from "./ThemeContext";
import App from './App';

ReactDOM.render(
  <ThemeContext>
      <App />
    </ThemeContext>,
  document.getElementById("root")
);
