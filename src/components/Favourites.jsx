import "./Favourites.css";

function Favourites({ favourites = [], removeFavourite, clearFavourites, allProperties, addFavourite }) {
  /* Allow dropping properties into favourites */
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const propertyId = e.dataTransfer.getData("propertyId");
    const property = allProperties.find(p => String(p.id) === propertyId);
    if (property) addFavourite(property);
  };

  return (
    <div
      className="favourites-float"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      data-testid="favourites-panel"
    >
      <h3>Favourites</h3>

      {favourites.length === 0 ? (
        <p className="empty" data-testid="empty-msg">No favourites yet</p>
      ) : (
        <>
          {favourites.map((f) => (
            <div
              key={f.id}
              className="favourite-item"
              data-testid={`favourite-${f.id}`}
              draggable
              onDragStart={(e) => e.dataTransfer.setData("favouriteId", f.id)}
            >
              <span className="favourite-text">
                {f.type} · £{f.price.toLocaleString()}
              </span>
              <button
                className="remove-btn"
                onClick={() => removeFavourite(f.id)}
                data-testid={`remove-${f.id}`}
                aria-label="Remove favourite"
              >
                ❌
              </button>
            </div>
          ))}

          <div className="clear-container">
            <button onClick={clearFavourites} className="clear-btn" data-testid="clear-btn">
              Clear All
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Favourites;
