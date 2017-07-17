// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";
import routes from "./config/routes.js";
import * as firebase from 'firebase';

var config = {
 	apiKey: "AIzaSyBFFpUbLCb1qkMX_8nbQFw_C-X0zjjp6t8",
    authDomain: "project3-5787c.firebaseapp.com",
    databaseURL: "https://project3-5787c.firebaseio.com",
    projectId: "project3-5787c",
    storageBucket: "project3-5787c.appspot.com",
    messagingSenderId: "418105182610"
};


firebase.initializeApp(config);

ReactDOM.render(routes, document.querySelector("#app"));
