import React, { useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RecipeCard = ({ recipe }) => {
  const [fav, isFav] = useState(false);
  return (
    <div>
      <div className="card w-96 bg-indigo-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{recipe.name}</h2>
          <h4 className="font-bold underline">Ingredients:</h4>
          <ul className="ml-8">
            {recipe.ingredients.map((ingre) => (
              <li>{ingre}</li>
            ))}
          </ul>
          <p>
            <span className="font-bold underline">Rating:</span> <Rating style={{ maxWidth: 100 }} value={recipe.rating}/>
          </p>
          <h4 className="font-bold underline">Cooking Method:</h4>
          <p className="text-gray-500">{recipe.cooking_method}</p>
          <div className="card-actions justify-end">
            <div>
              <button
                onClick={() => {
                  isFav(true);
                  toast.success("Added to favorites!");
                }}
                className="btn btn-primary"
                disabled={fav} // disable the button when fav is true
              >
                {fav ? "Favorited" : "Favorite"}
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
