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
          favourites={favourites} 
        />
      ))}
    </div>
  );
}

export default PropertyList;
