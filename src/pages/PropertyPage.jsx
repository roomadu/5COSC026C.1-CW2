import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import data from "../data/properties.json";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import "./PropertyPage.css";

function PropertyPage() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    const found = data.properties.find((p) => p.id === id);
    if (found) {
      setProperty(found);
      setMainImage(found.images?.[0] || found.picture); // fallback if images missing
    }
  }, [id]);

  if (!property) return <p>Loading...</p>;

  return (
    <>
      <Header />

      <div className="property-page">
        <h2>{property.type} · £{property.price.toLocaleString()}</h2>

        <Tabs>
          <TabList>
            <Tab>Images</Tab>
            <Tab>Description</Tab>
            <Tab>Floor Plan</Tab>
            <Tab>Google Map</Tab>
          </TabList>

          <TabPanel>
            <div className="main-image-container">
              <img src={mainImage} alt={property.type} className="main-image" />
            </div>
            <div className="thumbnails">
              {(property.images || [property.picture]).map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${property.type} ${index + 1}`}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            {/* Render HTML tags safely */}
            <div
              className="property-description"
              dangerouslySetInnerHTML={{ __html: property.longDescription || property.description }}
            />
          </TabPanel>

          <TabPanel>
            {property.floorPlan && (
              <img src={property.floorPlan} alt="Floor Plan" className="floor-plan" />
            )}
          </TabPanel>

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

        <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
        <p><strong>Tenure:</strong> {property.tenure}</p>
        <p><strong>Location:</strong> {property.location}</p>
        <p><strong>Added on:</strong> {property.added.day} {property.added.month}, {property.added.year}</p>
      </div>

      <Footer />
    </>
  );
}

export default PropertyPage;
