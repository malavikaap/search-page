import React from 'react';

const SearchBox = ({ searchQuery, setSearchQuery, onSearch }) => (
  <div className="flex items-center p-4">
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search..."
      className="border p-2 flex-1 rounded-l-md"
    />
    <button onClick={onSearch} className="bg-blue-500 text-white px-4 py-2 rounded-r-md">
      Search
    </button>
  </div>
);

export default SearchBox;
