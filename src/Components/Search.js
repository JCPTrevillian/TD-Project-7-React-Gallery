import React, { Component } from 'react';

import { withRouter } from 'react-router';

class Search extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push(`/search/${this.search.value}`);
    event.currentTarget.reset();
  }

  render() {
    return (
      <div>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <input type="search" name="search" placeholder="Search" ref={(node) => {this.search = node}} required/>
          <button type="submit" className="search-button"></button>
    

  export default withRouter(Search);