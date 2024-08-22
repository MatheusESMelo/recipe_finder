import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import axios from "axios";

interface Recipe {
  title: string;
  ingredients: string[];
  instructions: string;
  image_url: string;
}

const App: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const handleSearch = async (ingredients: string[]) => {
    try {
      const ingredientsQuery = ingredients.join(",");
      const response = await axios.get("http://127.0.0.1:8000/get-recipes/", {
        params: { ingredients: ingredientsQuery },
      });

      setRecipes(response.data.recipes);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  return (
    <div>
      <h1>Recipe Finder App</h1>
      <SearchBar onSearch={handleSearch} />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;
