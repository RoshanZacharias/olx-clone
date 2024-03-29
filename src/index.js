import React from "react";
import ReactDOM from "react-dom"; // Import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom";
import { FirebaseContext } from "./store/FirebaseContext";
import Context from "./store/FirebaseContext";
import db from "./firebase/config";
import App from "./App";



ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <FirebaseContext.Provider value={{ db }}>
          <Context>
            <App />
          </Context>
        </FirebaseContext.Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );