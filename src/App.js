import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Service from "./Components/Service";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="content border border-dark">

        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/service" element={<Service/>}/>
          <Route exact path="/contact" element={<ContactUs/>}/>
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
