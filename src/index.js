import React from 'react';
import ReactDOM from 'react-dom'
import App from "./app";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import "jquery/dist/jquery";
import "./global.styles.css";
import "popper.js/dist/popper";




ReactDOM.render(<App/>,document.getElementById("root"));