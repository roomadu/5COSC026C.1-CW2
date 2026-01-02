import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [type, setType] = useState("");
  const [open, setOpen] = useState(false); // for dropdown
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minBeds, setMinBeds] = useState("");
  const [maxBeds, setMaxBeds] = useState("");

  const options = ["Any Type", "House", "Flat"];

  const submit = (e) => {
    e.preventDefault();
    onSearch({
      type,
      minPrice: Number(minPrice),
      maxPrice: Number(maxPrice),
      minBeds: Number(minBeds),
      maxBeds: Number(maxBeds),
    });
  };

  const handleSelect = (value) => {
    setType(value === "Any Type" ? "" : value);
    setOpen(false);
  };

  return (
    <form className="search-form-card search-form-grid" onSubmit={submit}>
     
      <div className="custom-select-wrapper">
        <div
          className={`custom-select ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
        >
          {type || "Any Type"}
        </div>
        {open && (
          <div className="custom-options">
            {options.map((opt) => (
              <div
                key={opt}
                className={`custom-option ${type === opt ? "selected" : ""}`}
                onClick={() => handleSelect(opt)}
              >
                {opt}
              </div>
            ))}
          </div>
        )}
      </div>

     
      <input
        type="number"
        placeholder="Min Price (£)"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Max Price (£)"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Min Bedrooms"
        value={minBeds}
        onChange={(e) => setMinBeds(e.target.value)}
      />
      <input
        type="number"
        placeholder="Max Bedrooms"
        value={maxBeds}
        onChange={(e) => setMaxBeds(e.target.value)}
      />

      <button type="submit">Search Properties</button>
    </form>
  );
}

export default SearchForm;
