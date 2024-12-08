import React from 'react';

const FilterOptions = ({ categories, selectedCategory, setSelectedCategory }) => (
  <div className="p-4">
    <select
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
      className="border p-2 rounded-md"
    >
      <option value="">All Categories</option>
      {categories.map((category, index) => (
        <option key={index} value={category}>
          {category}
        </option>
      ))}
    </select>
  </div>
);

export default FilterOptions;
