import { Link } from "react-router-dom";

export default function RecipeCard({ id, title, image, type, addToFavorites }) {


    return (
    <div className="container m-5">
      <div className="card h-100 " style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Recipe Name : {title}</h5>
          <p className="card-text text-black fs-6">Recipe Type : {type}</p>
          <div className="card-button">
            <Link to={`/recipe/${id}`} className="btn btn-primary">                
              Ingredient
            </Link>
            <button type="button" onClick={addToFavorites} className="btn btn-primary">
              Favourite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
