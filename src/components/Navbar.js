import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [background, setBackground] = useState(false);

  return (
    <header>
      <nav>
        <Link className="logo" to="/">
          <h3>Kim's Cafe Köln</h3>
        </Link>

        <ul>
          <li>
            <Link
              onClick={() => setBackground(!background)}
              style={{ background: background ? "#9be3de" : "#5eb7b7" }}
              className="link"
              to="/speisekarte"
            >
              Speisekarte
            </Link>
          </li>
          <li>
            <Link className="link" to="/kontakt">
              Kontakt
            </Link>
          </li>
          <li>
            <Link className="link" to="/oeffnungszeiten">
              Öffnungszeiten
            </Link>
          </li>
          <li>
            <Link className="link" to="/galerie">
              Galerie
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
