import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { logout, user } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">

        {/* LEFT SIDE */}
        <div className="header-left">

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
          <svg
    className="header-logo-icon"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 5L6 9H3v6h3l5 4V5zM15 9a3 3 0 010 6m2-8a6 6 0 010 10"
    />
  </svg>


          <span className="logo-text">Vocal Mentor</span>

          {menuOpen && (
            <div className="menu-dropdown">
              <Link to="/">Practice</Link>
              <Link to="/history">History</Link>
            </div>
          )}

        </div>

        {/* RIGHT SIDE */}
        <div className="header-right">

          <div className="profile-initial">
            {user?.email?.charAt(0).toUpperCase()}
          </div>

          <button className="logout-button" onClick={logout}>
            Logout
          </button>

        </div>

      </div>
    </header>
  );
};

export default Header;