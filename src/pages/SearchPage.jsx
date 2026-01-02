import { useEffect, useState } from "react";
import PropertyList from "../components/PropertyList.jsx";
import SearchForm from "../components/SearchForm.jsx";
import Favourites from "../components/Favourites.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import data from "../data/properties.json";
import "./SearchPage.css";

function SearchPage() {
  const [properties, setProperties] = useState([]); // All properties
  const [results, setResults] = useState([]);       // Filtered search results
  const [favourites, setFavourites] = useState(() => {
    const saved = localStorage.getItem("favourites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    setProperties(data.properties);
    setResults(data.properties);
  }, []);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  // Filter properties based on search criteria
  function handleSearch(criteria) {
    const filtered = properties.filter((p) => {
      return (
        (!criteria.type || p.type === criteria.type) &&
        (!criteria.minPrice || p.price >= criteria.minPrice) &&
        (!criteria.maxPrice || p.price <= criteria.maxPrice) &&
        (!criteria.minBeds || p.bedrooms >= criteria.minBeds) &&
        (!criteria.maxBeds || p.bedrooms <= criteria.maxBeds)
      );
    });
    setResults(filtered);
  }

  // Add to favourites (click or drag)
  const addFavourite = (property) => {
    if (!favourites.some((f) => f.id === property.id)) {
      setFavourites([...favourites, property]);
    }
  };

  const removeFavourite = (id) => setFavourites(favourites.filter((f) => f.id !== id));
  const clearFavourites = () => setFavourites([]);

  return (
    <div className="search-page">
      <Header />

      <section id="search-section" className="search-banner">
        <div className="search-banner-inner">
          <h1 className="search-title">Find Your Perfect Property</h1>
          <div className="search-panels">
            <div className="search-panel">
              <SearchForm onSearch={handleSearch} />
            </div>

            <div className="favourites-panel">
              {/* Pass properties for drag lookup */}
              <Favourites
                favourites={favourites}
                removeFavourite={removeFavourite}
                clearFavourites={clearFavourites}
                addFavourite={addFavourite}
                allProperties={properties}  // <-- NEW
              />
            </div>
          </div>
        </div>
      </section>

      <section id="properties-section" className="properties-section">
        <div className="main-content">
          <PropertyList
            properties={results}
            addFavourite={addFavourite}
            favourites={favourites}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default SearchPage;
