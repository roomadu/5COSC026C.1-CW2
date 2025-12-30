import PropertyCard from "./PropertyCard.jsx";
import "./PropertyList.css";

function PropertyList({ properties, addFavourite, favourites = [] }) {
  return (
    <div className="grid">
      {properties.map((p) => (
        <PropertyCard
          key={p.id}
          property={p}
          addFavourite={addFavourite}
          favourites={favourites} // pass favourites to each card
        />
      ))}
    </div>
  );
}

export default PropertyList;
