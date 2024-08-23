import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

interface Recipe {
  title: string;
  ingredients: string[];
  instructions: string;
  image_url: string;
}

const App: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [currentIngredients, setCurrentIngredients] = useState<string[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const fetchRecipes = async (ingredients: string[], page: number) => {
    try {
      const ingredientsQuery = ingredients.join(",");
      const response = await axios.get("http://127.0.0.1:8000/get-recipes/", {
        params: { ingredients: ingredientsQuery, page },
      });

      const newRecipes = response.data.recipes;

      if (newRecipes.length === 0) {
        setHasMore(false);
      } else {
        setRecipes((prevRecipes) => [...prevRecipes, ...newRecipes]);
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const handleSearch = async (ingredients: string[]) => {
    setCurrentIngredients(ingredients);
    setRecipes([]);
    setPage(1);
    setHasMore(true);
    setHasSearched(true);
    fetchRecipes(ingredients, 1);
  };

  useEffect(() => {
    if (page > 1) {
      fetchRecipes(currentIngredients, page);
    }
  }, [page]);

  const fetchMoreData = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <h1>Recipe Finder App</h1>
      <SearchBar onSearch={handleSearch} />
      {hasSearched && (
        <InfiniteScroll
          dataLength={recipes.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4>Loading more recipes...</h4>}
          endMessage={<p>No more recipes to show</p>}
        >
          <RecipeList recipes={recipes} />
        </InfiniteScroll>
      )}
    </div>
  );
};

export default App;
