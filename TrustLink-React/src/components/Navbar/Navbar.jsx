import "./Navbar.css";

function Navbar({ onRunMatching }) {
  return (
    <nav className="navbar">
      <div className="logo">trustlink</div>

      <div className="nav-links">
        <a href="#product">Product</a>
        <a href="#pipeline">Pipeline</a>
        <a href="#results">Matches</a>
        <a href="#results">Results</a>
      </div>

      <div className="nav-actions">
        <a href="#results" className="login">View results</a>

        <button className="nav-button" onClick={onRunMatching}>
          Run matching
        </button>
      </div>
    </nav>
  );
}

export default Navbar;