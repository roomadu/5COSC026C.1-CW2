import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import SearchPage from "./pages/SearchPage";
import PropertyPage from "./pages/PropertyPage";
import "./App.css";



function App() {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (property) => {
    setFavourites(prev =>
      prev.some(p => p.id === property.id) ? prev : [...prev, property]
    );
  };

  const removeFavourite = (id) => {
    setFavourites(prev => prev.filter(p => p.id !== id));
  };

  const clearFavourites = () => setFavourites([]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <SearchPage
            favourites={favourites}
            addFavourite={addFavourite}
            removeFavourite={removeFavourite}
            clearFavourites={clearFavourites}
          />
        }
      />

      <Route
        path="/property/:id"
        element={
          <PropertyPage
            favourites={favourites}
            addFavourite={addFavourite}
            removeFavourite={removeFavourite}
          />
        }
      />
    </Routes>
  );
}

export default App;
