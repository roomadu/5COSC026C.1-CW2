import { useState, useEffect } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [type, setType] = useState("");
  const [open, setOpen] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minBeds, setMinBeds] = useState("");
  const [maxBeds, setMaxBeds] = useState("");
  const [postcode, setPostcode] = useState("");
  const [dateAdded, setDateAdded] = useState("");

  const options = ["Any Type", "House", "Flat"];

  const handleSelect = (value) => {
    setType(value === "Any Type" ? "" : value);
    setOpen(false);
  };

  // 🔹 Live filtering: call onSearch whenever any criteria changes
  useEffect(() => {
    onSearch({
      type,
      minPrice: Number(minPrice) || "",
      maxPrice: Number(maxPrice) || "",
      minBeds: Number(minBeds) || "",
      maxBeds: Number(maxBeds) || "",
      postcode: postcode.trim(),
      dateAdded,
    });
  }, [type, minPrice, maxPrice, minBeds, maxBeds, postcode, dateAdded]);

  return (
    <form className="search-form-card search-form-grid" onSubmit={(e) => e.preventDefault()}>
      {/* Property type dropdown */}
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

      {/* Price and bedrooms */}
      <input type="number" placeholder="Min Price (£)" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
      <input type="number" placeholder="Max Price (£)" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
      <input type="number" placeholder="Min Bedrooms" value={minBeds} onChange={(e) => setMinBeds(e.target.value)} />
      <input type="number" placeholder="Max Bedrooms" value={maxBeds} onChange={(e) => setMaxBeds(e.target.value)} />
      <input type="text" placeholder="Postcode" value={postcode} onChange={(e) => setPostcode(e.target.value)} />
      <input type="date" placeholder="Date Added" value={dateAdded} onChange={(e) => setDateAdded(e.target.value)} />
      <button type="submit">Search Properties</button>
    </form>
  );
}

export default SearchForm;
