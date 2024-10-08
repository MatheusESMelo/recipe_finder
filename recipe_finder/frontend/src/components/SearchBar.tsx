import React, { useState } from "react";
import "./css/SearchBar.css";

interface SearchBarProps {
  onSearch: (ingredients: string[]) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSearch = () => {
    const ingredients = input.split(",").map((ingredient) => ingredient.trim());
    onSearch(ingredients);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter ingredients separated by commas"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
