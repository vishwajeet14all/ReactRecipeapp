import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Favourite() {
  const [data, setData] = useState([""]);

  useEffect(() => {
    const getFav = JSON.parse(localStorage.getItem("fav"));
    if (getFav) {
      setData(getFav);
      console.log(getFav);
    }
  }, []);

  const removeFav = (item) => {
    console.log(item);
    let newData = [...data]  
    newData = data.filter((el) => el.recipe.calories !== item);  
    setData(newData)
    console.log(newData);      
    localStorage.setItem("fav", JSON.stringify(newData));
  };

  return (
    <div className="container">
      {data.map((item) => (                
        <div className="card mt-4">            
          <div className="row">            
            {item.recipe && (                               
              <>
                <div className="col">
                  <img src={item.recipe.image} alt="" />
                </div>
                <div className="col p-3">
                  <h3>{item.recipe.label}</h3>
                  <ul>
                    {item.recipe.ingredients.map((i, index) => (
                      <li key={index}>{i.text}</li>
                    ))}
                  </ul>
                  <p className="text-dark fs-5 ">
                    Calories: {item.recipe.calories}                    
                  </p>
                  <div className="card-button">
                    <Link to="/" className="btn btn-primary">
                      Back
                    </Link>
                    <button
                      className="btn me-5 btn-danger"
                      onClick={() => removeFav(item.recipe.calories)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
