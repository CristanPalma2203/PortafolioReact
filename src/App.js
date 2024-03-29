import { Route, Routes } from "react-router";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home_page from "./pages/Home_page";
import Project_page from "./pages/Project_page";


import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000, delay: 500 });
  }, []);
  return (
    <div className="bg-[#282C33]">
      {/* react-router-dom */}
      <Navbar />
      <Routes>
        {/* HOME PAGE */}
        <Route path="/" element={<Home_page />} />
        <Route path="/projects" element={<Project_page />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
