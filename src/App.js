import "./App.css";
import { ImSpoonKnife } from "react-icons/im";
import { Search } from "react-bootstrap-icons";
import RecipeCard from "./components/RecipeCard";
import { useState } from "react";

function App({ recipes, setQuery }) {
  let id = 0;
  const [search, setSearch] = useState("");
  //favorites state
  const [fav, setFav] = useState([]);

  function handleInput(e) {
    const { value } = e.target;
    setSearch(value);
  }

  const handleUpdate = () => {
    setQuery(search);
  };

  //adding to local storage
  const addToFavorites = (curritem) => {
    // console.log(curritem.recipe.calories);
    const copyFav = [...fav];
    const index = copyFav.findIndex(
      (item) => item.recipe.calories === curritem.recipe.calories
    );
    // console.log(index);
    if (index === -1) {
      copyFav.push(curritem);
      setFav(copyFav);
      const getFav = JSON.parse(localStorage.getItem("fav"));
      if (getFav !== null) {
        // console.log(getFav);
        let dataToBeSave = [...getFav,...copyFav];
        // console.log(dataToBeSave);
        localStorage.setItem("fav", JSON.stringify(dataToBeSave));
      } else {
        localStorage.setItem("fav", JSON.stringify(copyFav));
      }
    } else {
      alert("Item is already there");
    }
  };
  // console.log(fav);
  return (
    <>
      <header
        className="header"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1543339308-43e59d6b73a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)`,
        }}
      >
        <div className="layer">
          <div className="container">
            <div className="logo-wrapper">
              <div className="logo">
                <ImSpoonKnife className="brand" />
              </div>
            </div>
            <div className="header-text">
              <h1 className="hero-heading">Recipe App</h1>
              <p className="hero-para">Let's Find some Recipe together...</p>
            </div>
          </div>
        </div>
      </header>
      <div className="heading-line">
        <strong>Search Recipes</strong>
      </div>

      <div className="input-wrapper">
        <input
          type="text"
          name="search-btn"
          onChange={handleInput}
          value={search}
        />
        <button className="button" onClick={handleUpdate}>
          <Search />
        </button>
      </div>

      <div className="cards">
        {recipes.map((recipe) => (
          <RecipeCard
            id={(id = id + 1)}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            type={recipe.recipe.cuisineType}
            setQuery={setQuery}
            addToFavorites={() => addToFavorites(recipe)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
