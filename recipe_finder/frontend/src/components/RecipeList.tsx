import React from "react";
import "./css/RecipeList.css";

interface Recipe {
  title: string;
  ingredients: string[];
  instructions: string;
  image_url: string;
}

interface RecipeListProps {
  recipes: Recipe[];
  onShowMore: (recipe: Recipe) => void;
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes, onShowMore }) => {
  if (!recipes || recipes.length === 0) {
    return <div>No recipes found</div>;
  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe, index) => (
        <div className="recipe-card" key={index}>
          <h2>{recipe.title}</h2>
          <img
            src={recipe.image_url}
            alt={recipe.title}
            className="recipe-image"
          />
          <button onClick={() => onShowMore(recipe)}>Show More</button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
