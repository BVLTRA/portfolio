import React, { useState } from "react";
import "./Navigation.css";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const navItems = ["home", "work", "process", "contact"];

  return (
    <nav className="bvltra-nav">
      <div className="nav-container">
        {/* Left Column (Brand)*/}
        <div className="nav-brand">
          <span className="brand-sans uppercase">BVLTRA</span>
          <span className="brand-serif lowercase italic">portfolio</span>
        </div>

        {/* Center Column (Links) */}
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={activeSection === item ? "active" : ""}
                onClick={() => setActiveSection(item)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Column (Personal Signature) */}
        <div className="nav-signature">
          <span>Tshedza Mosehane</span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
