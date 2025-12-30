import { useEffect, useState } from "react";
import PropertyList from "../components/PropertyList.jsx";
import SearchForm from "../components/SearchForm.jsx";
import Favourites from "../components/Favourites.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import data from "../data/properties.json";
import "./SearchPage.css";

function SearchPage({ favourites, addFavourite, removeFavourite, clearFavourites }) {
  const [properties, setProperties] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    setProperties(data.properties);
    setResults(data.properties);
  }, []);



  function handleSearch(criteria) {
    const filtered = properties.filter(p => {
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

  return (
    <div className="search-page">
      <Header />

      {/* SEARCH SECTION */}
      <section id="search-section" className="search-banner">
        <div className="search-banner-overlay">
          <h1>Find Your Perfect Property</h1>
          <SearchForm onSearch={handleSearch} />
        </div>
      </section>

<section id="properties-section" className="properties-section">
  <div className="main-content">
    <PropertyList
      properties={results}
      addFavourite={addFavourite}
      favourites={favourites}
    />

          {/* Favourites sidebar */}
          <Favourites
            favourites={favourites}
            addFavourite={addFavourite}
            removeFavourite={removeFavourite}
            clearFavourites={clearFavourites}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default SearchPage;
