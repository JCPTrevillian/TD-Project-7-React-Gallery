import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import './App.css';

import Header from "./Header";
import GalleryContainer from "./GalleryContainer.js";
import PageNotFound from "./PageNotFound.js";
import apiKey from "../config";

class App extends Component {
//opens on beaches 1 of 3 default topics 
  state = { isLoading: false, search: '' };
  defaultSearch = 'beaches';

  fetchData = (search) => {
    const base_path = "https://api.flickr.com/services/rest/";
    const url_params =
      `method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`;
    const searchUrl = `${base_path}?${url_params}`;
//set state, fetch
    this.setState( { isLoading: true } );
    fetch(searchUrl)
      .then(response => response.json())
      .then(data => this.parseResponse(data))
      .then(items => this.setState( { items: items, search: search, isLoading: false } ));
  }

  parseResponse(data) {
    return data.photos.photo.map( (item) => {
      const src = `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`
      return {
        id: item.id,
        src: src}
      })
  }
//routing: switch, route tags
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/" render={ () => <Redirect to={`/search/${this.defaultSearch}`} /> } />
            <Route path="/search/:topic" render={ () => <GalleryContainer state={this.state} fetchData={this.fetchData} /> } />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;	
