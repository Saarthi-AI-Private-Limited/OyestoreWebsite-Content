import "./App.css";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Trips from "./pages/TripPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/trips" element={<Trips/>} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App;
