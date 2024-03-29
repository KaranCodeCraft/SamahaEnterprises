import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Service from "./Components/Service";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="content">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/service" element={<Service/>}/>
          <Route exact path="/contact" element={<ContactUs/>}/>
        </Routes>
        </div>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
