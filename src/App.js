import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Register from "./pages/Register";
import PropertyDetailsOverlayI from "./pages/PropertyDetailsOverlayI";
import Footer from "./pages/Footer";
import Favorites from "./pages/Favorites";
import Home01 from "./pages/Home01";
import ContactUs from "./pages/ContactUs";
import PropertyList from "./pages/PropertyList";
import PropertyDetailsOverlayF from "./pages/PropertyDetailsOverlayF";
import PropertyDetailsOverlayM from "./pages/PropertyDetailsOverlayM";
import PropertyDetails from "./pages/PropertyDetails";
import Agents2 from "./pages/Agents2";
import AgentsDetails from "./pages/AgentsDetails";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import NavigationBar from "./pages/NavigationBar";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/property-details-overlay-image-gallery":
        title = "";
        metaDescription = "";
        break;
      case "/footer":
        title = "";
        metaDescription = "";
        break;
      case "/favorites":
        title = "";
        metaDescription = "";
        break;
      case "/home-01":
        title = "";
        metaDescription = "";
        break;
      case "/contact-us":
        title = "";
        metaDescription = "";
        break;
      case "/propertylist":
        title = "";
        metaDescription = "";
        break;
      case "/property-details-overlay-floorplan":
        title = "";
        metaDescription = "";
        break;
      case "/property-details-overlay-map":
        title = "";
        metaDescription = "";
        break;
      case "/property-details":
        title = "";
        metaDescription = "";
        break;
      case "/agents-2":
        title = "";
        metaDescription = "";
        break;
      case "/agents-details":
        title = "";
        metaDescription = "";
        break;
      case "/error-page":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/navigation-bar":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Register />} />

      <Route
        path="/property-details-overlay-image-gallery"
        element={<PropertyDetailsOverlayI />}
      />

      <Route path="/footer" element={<Footer />} />

      <Route path="/favorites" element={<Favorites />} />

      <Route path="/home-01" element={<Home01 />} />

      <Route path="/contact-us" element={<ContactUs />} />

      <Route path="/propertylist" element={<PropertyList />} />

      <Route
        path="/property-details-overlay-floorplan"
        element={<PropertyDetailsOverlayF />}
      />

      <Route
        path="/property-details-overlay-map"
        element={<PropertyDetailsOverlayM />}
      />

      <Route path="/property-details" element={<PropertyDetails />} />

      <Route path="/agents-2" element={<Agents2 />} />

      <Route path="/agents-details" element={<AgentsDetails />} />

      <Route path="/error-page" element={<ErrorPage />} />

      <Route path="/login" element={<Login />} />

      <Route path="/navigation-bar" element={<NavigationBar />} />
    </Routes>
  );
}
export default App;
