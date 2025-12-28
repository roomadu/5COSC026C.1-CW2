import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [type, setType] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minBeds, setMinBeds] = useState("");
  const [maxBeds, setMaxBeds] = useState("");
  const [postcode, setPostcode] = useState("");
  const [date, setDate] = useState("");

  function submit(e) {
    e.preventDefault();
    onSearch({
      type,
      minPrice: Number(minPrice),
      maxPrice: Number(maxPrice),
      minBeds: Number(minBeds),
      maxBeds: Number(maxBeds),
      postcode,
      date
    });
  }

  return (
    <form onSubmit={submit}>
      <select onChange={e => setType(e.target.value)}>
        <option value="">Any</option>
        <option value="House">House</option>
        <option value="Flat">Flat</option>
      </select>

      <input type="number" placeholder="Min Price" onChange={e => setMinPrice(e.target.value)} />
      <input type="number" placeholder="Max Price" onChange={e => setMaxPrice(e.target.value)} />
      <input type="number" placeholder="Min Beds" onChange={e => setMinBeds(e.target.value)} />
      <input type="number" placeholder="Max Beds" onChange={e => setMaxBeds(e.target.value)} />
      <input placeholder="Postcode" onChange={e => setPostcode(e.target.value)} />
      <input type="date" onChange={e => setDate(e.target.value)} />

      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
