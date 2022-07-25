import React from 'react';

const NoResults = ( {search} ) => {
  return (
    <div className="not-found">
      <h2>No Results</h2>
      <h3>Your search for "{search}" did not return any results.</h3>
    </div>
  );
}

export default NoResults;
