import { Link } from "react-router-dom";
import "./PropertyCard.css";

function PropertyCard({ property }) {
  return (
    <div className="card">
      <img src={property.picture} alt="property" />
      <h3>£{property.price.toLocaleString()}</h3>
      <p>{property.type} · {property.bedrooms} bedrooms</p>
      <Link to={`/property/${property.id}`}>View Details</Link>
    </div>
  );
}

export default PropertyCard;
