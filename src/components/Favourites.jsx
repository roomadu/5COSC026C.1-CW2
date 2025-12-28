function Favourites({ favourites, removeFavourite, clearFavourites }) {
  return (
    <div>
      <h3>Favourites</h3>

      {favourites.map(f => (
        <div key={f.id}>
          <span>{f.type} - £{f.price}</span>
          <button onClick={() => removeFavourite(f.id)}>Remove</button>
        </div>
      ))}

      {favourites.length > 0 && (
        <button onClick={clearFavourites}>Clear All</button>
      )}
    </div>
  );
}

export default Favourites;
