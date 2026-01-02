import PropertyCard from "./PropertyCard.jsx";
import "./PropertyList.css";

function PropertyList({ properties, addFavourite, favourites = [] }) {
  return (
    <div className="grid">
      {/* Loop through each property and render a card */}
      {properties.map((p) => (
        <PropertyCard
          key={p.id}
          property={p}
          addFavourite={addFavourite} // For click or drag-to-favourites
          favourites={favourites}     // To check if already favourited
        />
      ))}
    </div>
  );
}

export default PropertyList;
