
import { Link } from "react-router-dom";
import "./PropertyCard.css";

function PropertyCard({ property, addFavourite }) {
    return (
        <div className="card">
            <img src={property.picture} alt="" />
            <h3>£{property.price.toLocaleString()}</h3>
            <p>{property.type} · {property.bedrooms} beds</p>
            <p>{property.location}</p>

            <button onClick={() => addFavourite(property)}>
                ❤ Favourite
            </button>

            <Link to={`/property/${property.id}`}>View Details</Link>
        </div>
    );
}

export default PropertyCard;
