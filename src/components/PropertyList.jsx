import PropertyCard from "./PropertyCard";
import "./PropertyList.css";

function PropertyList({ properties }) {
  return (
    <div className="grid">
      {properties.map(p => (
        <PropertyCard key={p.id} property={p} />
      ))}
    </div>
  );
}

export default PropertyList;
