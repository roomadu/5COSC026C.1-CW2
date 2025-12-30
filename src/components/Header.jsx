import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src="/logo.png" alt="Website Logo" />
        <h2>Dream Properties</h2>
      </div>

      <nav className="header-nav">
        {/* Scroll links to sections on SearchPage */}
        <a href="/#search-section">Search Properties</a>
        <a href="/#properties-section">Properties</a>
      </nav>
    </header>
  );
}

export default Header;
