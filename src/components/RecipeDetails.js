import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function RecipeDetails({ recipes }) {
  const { id } = useParams();

  const newId = id - 1;
  const Recip = recipes[newId];
  const image = Recip.recipe.image;
  const title = Recip.recipe.label;
  const ingredients = Recip.recipe.ingredients;
  const calories = Recip.recipe.calories;
  
  

  return (
    <>
      {id ? (
        <div className="container">
          <div className="card mt-4">
            <div className="row">
              <div className="col ">
                <img src={image} alt="" />
              </div>
              <div className="col p-3">
                <h3>{title}</h3>
                <ul>
                  {ingredients.map((i) => (
                    <li>{i.text}</li>
                  ))}
                </ul>
                <p className="text-dark fs-5 ">Calories: {calories}</p>
                <Link to="/" className="btn btn-primary">
                  Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Hello</p>
      )}
    </>
  );
}
