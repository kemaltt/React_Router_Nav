import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Speiskarte from "./pages/Speiskarte";
import Kontakt from "./pages/Kontakt";
import Offnungszeiten from "./pages/Offnungszeiten";
import Galerie from "./pages/Galerie";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/speisekarte" element={<Speiskarte />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/oeffnungszeiten" element={<Offnungszeiten />} />
        <Route path="/galerie" element={<Galerie />} />
      </Routes>
    </div>
  );
}

export default App;
