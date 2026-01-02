import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goToSection = (sectionId) => {
    if (location.pathname === "/") {
      scrollToSection(sectionId);
    } else {
      navigate("/");
      setTimeout(() => scrollToSection(sectionId), 150);
    }
  };

  return (
    <header className="header">
      <div className="header-left">
        <img src="/logo.png" alt="Website Logo" />
        <h2>Dream Properties</h2>
      </div>

      <nav className="header-nav">
        <button
          className="nav-btn"
          onClick={() => goToSection("search-section")}
          aria-label="Go to Search Properties section"
        >
          Search Properties
        </button>
        <button
          className="nav-btn"
          onClick={() => goToSection("properties-section")}
          aria-label="Go to Properties section"
        >
          Properties
        </button>
      </nav>
    </header>
  );
}

export default Header;
