import React, { useState } from 'react';
import SearchBox from './components/search/SearchBox'
import SearchResults from './components/search/SearchResults'
import FilterOptions from './components/search/FilterOptions'
import './App.css'

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const allResults = [
    { text: 'React Tutorial', category: 'Programming' },
    { text: 'Healthy Recipes', category: 'Cooking' },
    { text: 'Delicious Recipes', category: 'Cooking' },
    { text: 'Yoga for Beginners', category: 'Fitness' },
    { text: 'C for Beginners', category: 'Programming' },
    { text: 'Python basic Tutorial', category: 'Programming' },
  ];

  const handleSearch = () => {
    const filteredResults = allResults
      .filter((item) =>
        item.text.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .filter((item) =>
        selectedCategory ? item.category === selectedCategory : true
      )
      .map((item) => item.text);
    setResults(filteredResults);
  };

  return (
    <div className="max-w-md mx-auto">
      <SearchBox
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearch={handleSearch}
      />
      <FilterOptions
        categories={['Programming', 'Cooking', 'Fitness']}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <SearchResults results={results} />
    </div>
  );
};

export default App;
