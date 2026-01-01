import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import data from "../data/properties.json";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import "./PropertyPage.css";

function PropertyPage({ addFavourite, favourites = [] }) {
  const { id } = useParams();
  const location = useLocation();
  const [property, setProperty] = useState(null);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    const found = data.properties.find((p) => p.id === id);
    if (found) {
      setProperty(found);
      // Use image from card if passed, otherwise first image
      setMainImage(location.state?.mainImage || found.images[0]);
    }
  }, [id, location.state]);

  if (!property) return <p>Loading...</p>;

  return (
    <>
      <Header />

      <div className="property-page">
        {/* Short description */}
        <div className="property-summary">
          <h2>{property.type}</h2>
          <p>£{property.price.toLocaleString()}</p>
          <p>{property.location}</p>
        </div>

        {/* Tabs for Images, Description, Floor Plan, Map */}
        <Tabs>
          <TabList>
            <Tab>Images</Tab>
            <Tab>Description</Tab>
            <Tab>Floor Plan</Tab>
            <Tab>Map</Tab>
          </TabList>

          {/* Images Tab */}
          <TabPanel>
            <div className="main-image-container">
              <img src={mainImage} alt={property.type} className="main-image" />
            </div>
            <div className="thumbnails">
              {property.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${property.type} ${index + 1}`}
                  onClick={() => setMainImage(img)}
                  className={mainImage === img ? "active-thumb" : ""}
                />
              ))}
            </div>
          </TabPanel>

          {/* Long Description */}
          <TabPanel>
            <p>{property.longDescription || property.description}</p>
          </TabPanel>

          {/* Floor Plan */}
          <TabPanel>
            <img src={property.floorPlan} alt="Floor Plan" className="floor-plan" />
          </TabPanel>

          {/* Google Map */}
          <TabPanel>
            <iframe
              title="property-map"
              src={`https://www.google.com/maps?q=${property.location}&output=embed`}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </TabPanel>
        </Tabs>

        {/* Property details */}
        <div className="property-details">
          <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
          <p><strong>Tenure:</strong> {property.tenure}</p>
          <p><strong>Added on:</strong> {property.added.day} {property.added.month}, {property.added.year}</p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default PropertyPage;
