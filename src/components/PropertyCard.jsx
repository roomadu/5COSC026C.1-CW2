import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import "./PropertyCard.css";

function PropertyCard({ property, addFavourite, favourites = [] }) {
  const isFavourite = favourites.some(f => f.id === property.id);

 
  const formattedPrice = property.price ? Number(property.price).toLocaleString() : "0";

  return (
    <div className="card">
      {/* Image container with favourite icon */}
      <div className="image-container">
        <img src={property.picture} alt={property.type} />
        <FaHeart
          className={`favourite-icon ${isFavourite ? "added" : ""}`}
          data-testid="favourite-icon"   
          onClick={() => addFavourite(property)}
        />
      </div>

      {/* Property info */}
      <h3>£{formattedPrice}</h3>
      <p>{property.type} · {property.bedrooms} {property.bedrooms > 1 ? "bedrooms" : "bedroom"}</p>
      <Link to={`/property/${property.id}`} className="view-details">
        View Details
      </Link>
    </div>
  );
}

export default PropertyCard;
