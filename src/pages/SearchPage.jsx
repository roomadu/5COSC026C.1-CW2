import { useEffect, useState } from "react";
import PropertyList from "../components/PropertyList.jsx";
import SearchForm from "../components/SearchForm.jsx";
import Header from "../components/Header.jsx";
import data from "../data/properties.json";
import "./SearchPage.css";

function SearchPage() {
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
        (!criteria.minPrice || p.price >= Number(criteria.minPrice)) &&
        (!criteria.maxPrice || p.price <= Number(criteria.maxPrice)) &&
        (!criteria.minBeds || p.bedrooms >= Number(criteria.minBeds))
      );
    });
    setResults(filtered);
  }

  return (
    <div>
      <Header />
      <h1>Property Search</h1>
      <SearchForm onSearch={handleSearch} />
      <PropertyList properties={results} />
    </div>
  );
}

export default SearchPage;
