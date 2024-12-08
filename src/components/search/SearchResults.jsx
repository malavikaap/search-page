import React from 'react';

const SearchResults = ({ results }) => (
  <div className="p-4">
    {results.length > 0 ? (
      results.map((result, index) => (
        <div key={index} className="border p-2 my-2">
          {result}
        </div>
      ))
    ) : (
      <p>No results found!!!</p>
    )}
  </div>
);

export default SearchResults;
