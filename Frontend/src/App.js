import { Toaster } from "sonner";
import "./App.css";
import LoginPage from "./Components/Authentication/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Components/Authentication/Register";
import Footer from "./Components/Footer/Footer";
import LandingPage from "./Components/LandingPage/LandingPage";
import Contact from "./Components/Contact/Contact";
import SideNav from "./Components/Hotel/Hotel Layout/SideNav";
import UserRegister from "./Components/Authentication/UserRegister";
import HotelRegister from "./Components/Authentication/HotelRegister";
import NgoRegister from "./Components/Authentication/NgoRegister";
import PrivateRoute from "./PrivateRoute";
import NgoSideNav from "./Components/NGO/NgoLayout/NgoSideNav";
import TrackingComponent from "./Components/Track";
import Qr from "./Components/Qr";
import UploadQr from "./Components/UploadQr";
import Volunteer from "./Components/Volunteer/VolunteerLayout/VolunteerSideNav";
import QrScanner from "./Components/Hotel/QrScanner";
import About from "./Components/About/About";
import User from "./Components/User/SideNav";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user_register" element={<UserRegister />} />
          <Route path="/hotel_register" element={<HotelRegister />} />
          <Route path="/ngo_register" element={<NgoRegister />} />
          <Route path="/ngo_management" element={<NgoSideNav />} />
          <Route path="/track" element={<TrackingComponent />} />
          <Route path="/qr" element={<Qr />} />
          <Route path="/qrscan" element={<QrScanner />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/user" element={<User />} />
          {/* Protected Routes */}
          <Route element={<PrivateRoute />}>
            <Route path="/contact" element={<Contact />} />
            <Route path="/hotel_management" element={<SideNav />} />
          </Route>
          <Route path="/aboutus" element={<About />} />
        </Routes>
      </Router>
      <Toaster richColors position="top-right" />
    </>
  );
}

export default App;
