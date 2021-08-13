import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import HttpClient from "./network/http";
import FileService from "./service/File_Service";

const baseURL = process.env.REACT_APP_BASE_URL;
const httpClient = new HttpClient(baseURL);
const fileService = new FileService(httpClient);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App fileService={fileService} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
