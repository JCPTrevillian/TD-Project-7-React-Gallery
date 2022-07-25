import React from 'react';

import Search from "./Search";
import Nav from "./Nav";

const Header = () => {
  return (
    <div>
      <h1>Image Results</h1>
      <Search />
      <Nav />
    </div>
  );
}

export default Header;