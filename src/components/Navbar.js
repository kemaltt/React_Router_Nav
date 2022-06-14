import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav>
        <Link className="logo" to="/">
          <h3>Kim's Cafe Köln</h3>
        </Link>

        <ul>
          <li>
            <Link className="link" to="/speisekarte">
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
