import { useState } from "react";
import "./SearchForm.css";


function SearchForm({ onSearch }) {
  const [type, setType] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minBeds, setMinBeds] = useState("");
  const [maxBeds, setMaxBeds] = useState("");

  function submit(e) {
    e.preventDefault();
    onSearch({
      type,
      minPrice: Number(minPrice),
      maxPrice: Number(maxPrice),
      minBeds: Number(minBeds),
      maxBeds: Number(maxBeds)
    });
  }

  return (
    <form className="search-form-card search-form-grid" onSubmit={submit}>
      <select onChange={e => setType(e.target.value)}>
        <option value="">Any Type</option>
        <option value="House">House</option>
        <option value="Flat">Flat</option>
      </select>

      <input type="number" placeholder="Min Price (£)" onChange={e => setMinPrice(e.target.value)} />
      <input type="number" placeholder="Max Price (£)" onChange={e => setMaxPrice(e.target.value)} />
      <input type="number" placeholder="Min Bedrooms" onChange={e => setMinBeds(e.target.value)} />
      <input type="number" placeholder="Max Bedrooms" onChange={e => setMaxBeds(e.target.value)} />

      <button type="submit">Search Properties</button>
    </form>
  );
}

export default SearchForm;
