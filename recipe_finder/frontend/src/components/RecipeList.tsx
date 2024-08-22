import React from "react";

interface Recipe {
  title: string;
  ingredients: string[];
  instructions: string;
  image_url: string;
}

interface RecipeListProps {
  recipes: Recipe[];
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {
  if (!recipes || recipes.length === 0) {
    return <div>No recipes found</div>;
  }

  return (
    <div>
      {recipes.map((recipe, index) => (
        <div key={index}>
          <h2>{recipe.title}</h2>
          <img
            src={recipe.image_url}
            alt={recipe.title}
            style={{ width: "100px", height: "100px" }}
          />
          <ul>
            {recipe.ingredients.map((ingredient, i) => (
              <li key={i}>{ingredient}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
