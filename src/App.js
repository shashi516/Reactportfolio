import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bio from "./Component/Bio";
import About from "./Component/About";
import Navbars from "./Component/Navbars";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Projects from "./Component/Projects";
import Contact from "./Component/Contact";

function App() {
    return (
        <>
            <Navbars />
            <Routes>
                <Route path="/" element={<Bio />} />
                <Route path="/about" element={<About />} />
                <Route path="/project" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    );
}

export default App;
