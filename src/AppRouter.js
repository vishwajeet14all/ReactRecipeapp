import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import RecipeDetails from "./components/RecipeDetails";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Favourite from "./components/Favourite";
import NotFound from "./components/NotFound";

function AppRouter() {
  const app_id = process.env.REACT_APP_ID;
  const app_key = process.env.REACT_APP_KEY;
  const [query, setQuery] = useState("Rice");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${app_id}&app_key=${app_key}`
      )
      .then((res) => setRecipes(res.data.hits))
      .catch((err) => console.log(err));
  }, [query, app_id, app_key]);

  // console.log(recipes);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route
          path="/"
          element={<App recipes={recipes} setQuery={setQuery} />}
        />

        {recipes.length > 0 && (
          <Route
            path="/recipe/:id"
            element={<RecipeDetails recipes={recipes} />}
          ></Route>
        )}

        <Route path="/favourite" element={<Favourite />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
