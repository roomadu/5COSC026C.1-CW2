import { useState, useEffect } from "react";
import PropertyList from "../components/PropertyList.jsx";
import SearchForm from "../components/SearchForm.jsx";
import Favourites from "../components/Favourites.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import data from "../data/properties.json";
import "./SearchPage.css";

function SearchPage() {
  const [properties, setProperties] = useState([]);
  const [results, setResults] = useState([]);

  const [favourites, setFavourites] = useState(() => {
    const saved = localStorage.getItem("favourites");
    return saved ? JSON.parse(saved) : [];
  });

  const monthMap = {
    January: "01", February: "02", March: "03", April: "04",
    May: "05", June: "06", July: "07", August: "08",
    September: "09", October: "10", November: "11", December: "12"
  };

  // Initialize properties on mount
  useEffect(() => {
    setProperties(data.properties);
    setResults(data.properties); // Show all initially
  }, []);

  // Save favourites to localStorage
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  // Handle Search button click
  const handleSearch = (criteria) => {
    const filtered = properties.filter((p) => {
      const matchesType = !criteria.type || p.type === criteria.type;
      const matchesPrice =
        (!criteria.minPrice || p.price >= criteria.minPrice) &&
        (!criteria.maxPrice || p.price <= criteria.maxPrice);
      const matchesBeds =
        (!criteria.minBeds || p.bedrooms >= criteria.minBeds) &&
        (!criteria.maxBeds || p.bedrooms <= criteria.maxBeds);
      const matchesPostcode =
        !criteria.postcode ||
        p.location.toLowerCase().startsWith(criteria.postcode.toLowerCase());

      const propDate = `${p.added.year}-${monthMap[p.added.month]}-${String(
        p.added.day
      ).padStart(2, "0")}`;
      const matchesDate = !criteria.dateAdded || propDate === criteria.dateAdded;

      return matchesType && matchesPrice && matchesBeds && matchesPostcode && matchesDate;
    });

    setResults(filtered);
  };

  // Favourites handlers
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
              <Favourites
                favourites={favourites}
                removeFavourite={removeFavourite}
                clearFavourites={clearFavourites}
                addFavourite={addFavourite}
                allProperties={properties}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="properties-section" className="properties-section">
        <div
          className="main-content"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            const favId = e.dataTransfer.getData("favouriteId");
            if (favId) removeFavourite(favId); // Drag-out removal
          }}
        >
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
