// import React, { useEffect, useState } from "react";
// import { faHeart, faBowlFood } from "@fortawesome/free-solid-svg-icons";
// import { Link, useLoaderData } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const ChefRecipes = () => {
//   const chefsData = useLoaderData();
//   console.log(chefsData);
//   const [user, setUser] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost:5000/chefs")
//       .then((res) => res.json())
//       .then((data) => setUser(data));
//   }, []);

//   return (
//     <>
//       <div>
//         {user.map((data) => {
//           <div className="card card-compact w-96 bg-base-100 shadow-xl">
//             <figure className="w-full">
//               <img src={data.image} alt="Shoes" />
//             </figure>
//             <div className="card-body">
//               <h2 className="card-title">{data.name}</h2>
//               <h2>Experience: {data.experience}</h2>
//               <h3>Recipes: {data.num_recipes}</h3>
//               <h3>
//                 <FontAwesomeIcon icon={faHeart} /> {data.likes}
//               </h3>
//             </div>
//           </div>;
//         })}
//       </div>
//     </>
//   );
// };

// export default ChefRecipes;

import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import RecipeCard from "./RecipeCard";

const ChefRecipes = () => {
  const chefData = useLoaderData();
  console.log(chefData);
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={chefData.image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{chefData.name}</h1>
            <p className="py-6">{chefData.description}</p>
            <p>Likes: {chefData.likes}</p>
          </div>
        </div>
      </div>

      <h2 className="text-center font-bold my-12 text-3xl">
        Chef Recipe's Here
      </h2>
      <div className="grid grid-cols-3 container mx-auto mb-12 gap-9">

      {chefData.recipes.map((recipe) => <RecipeCard recipe={recipe} key={recipe.recipe_id}></RecipeCard>)}
      </div>
    </>
  );
};

export default ChefRecipes;
