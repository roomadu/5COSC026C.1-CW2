import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../data/properties.json";
import "./PropertyPage.css";

function PropertyPage() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const found = data.properties.find(p => p.id === id);
    setProperty(found);
  }, [id]);

  if (!property) return <p>Loading...</p>;

  return (
    <div className="property-page">
      <h2>{property.type} · £{property.price.toLocaleString()}</h2>
      <img src={property.picture} alt={property.type} />
      <img src="images/prop1.jpg" />
      <p><strong>Id:</strong> {property.id}</p>
      <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
      <p><strong>Tenure:</strong> {property.tenure}</p>
      <p><strong>Location:</strong> {property.location}</p>
      <p><strong>Added on:</strong> {property.added.day} {property.added.month}, {property.added.year}</p>
      <p className="description">{property.description}</p>
    </div>
  );
}

export default PropertyPage;
