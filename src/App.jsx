import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import SearchPage from "./pages/SearchPage";
import PropertyPage from "./pages/PropertyPage";
import "./App.css";

function App() {
  /* Stores favourite properties across the app */
  const [favourites, setFavourites] = useState([]);

  /* Adds a property to favourites if it is not already added */
  const addFavourite = (property) => {
    setFavourites(prev =>
      prev.some(p => p.id === property.id) ? prev : [...prev, property]
    );
  };

  /* Removes a property from favourites using its ID */
  const removeFavourite = (id) => {
    setFavourites(prev => prev.filter(p => p.id !== id));
  };

  return (
    <Routes>
      {/* Search and listing page */}
      <Route
        path="/"
        element={
          <SearchPage
            favourites={favourites}
            addFavourite={addFavourite}
            removeFavourite={removeFavourite}
            clearFavourites={() => setFavourites([])}
          />
        }
      />

      {/* Property page */}
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
