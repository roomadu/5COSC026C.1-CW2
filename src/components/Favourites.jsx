import "./Favourites.css";
function Favourites({ favourites = [], removeFavourite, clearFavourites }) {
  return (
    <div className="favourites-float">
      <h3>Favourites</h3>

      {favourites.length === 0 ? (
        <p className="empty">No favourites yet</p>
      ) : (
        <>
          {favourites.map(f => (
            <div key={f.id} className="favourite-item">
              <span className="favourite-text">{f.type} · £{f.price.toLocaleString()}</span>
              <button className="remove-btn" onClick={() => removeFavourite(f.id)}>❌</button>
            </div>
          ))}
          <div className="clear-container">
            <button onClick={clearFavourites} className="clear-btn">Clear All</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Favourites;
