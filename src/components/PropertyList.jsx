import PropertyCard from "./PropertyCard";
import "./PropertyList.css";

function PropertyList({ properties, addFavourite }) {
  return (
    <div className="grid">
      {properties.map(p => (
        <PropertyCard key={p.id} property={p} addFavourite={addFavourite} />
      ))}
    </div>
  );
}

export default PropertyList;
