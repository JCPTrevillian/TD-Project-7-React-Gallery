import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import './App.css';

import Header from "./Header";
import GalleryContainer from "./GalleryContainer.js";
import PageNotFound from "./PageNotFound";
import apiKey from "../config";

class App extends Component {

  state = { isLoading: false, search: '' };
  defaultSearch = 'beaches';

}
