import './App.css';
import Header from "./Components/Pages/Header/Header";
import Footer from "./Components/Pages/Footer/Footer";
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import Service from "./Components/Pages/Service/Service";
import Contact from "./Components/Pages/Contact/Contact";
import React from "react";

function App() {
    const loc = useLocation();
    console.log(loc.pathname);
    return (
        <div className="App">

            <div className="main">
                <div className={loc.pathname === "/service" ? "line-1Service" : loc.pathname === "/about" ? "line-1About" : "line-1"}></div>
                <div className={loc.pathname === "/service" ? "line-2Service" : loc.pathname === "/about" ? "line-2About" : "line-2"}></div>
                <div className={loc.pathname === "/service" ? "line-3Service" : loc.pathname === "/about" ? "line-3About" : "line-3"}></div>
                <div className={loc.pathname === "/service" ? "line-4Service" : loc.pathname === "/about" ? "line-4About" : "line-4"}></div>
                <div className={loc.pathname === "/service" ? "line-5Service" : loc.pathname === "/about" ? "line-5About" : "line-5"}></div>
                <div className={loc.pathname === "/service" ? "line-6Service" : loc.pathname === "/about" ? "line-6About" : "line-6"}></div>
                    <Header/>
                <Routes>
                    <Route exact path="/"
                           element={<Home />}/>
                    <Route path="/service" element={<Service />}/>
                    <Route path="/about"
                           element={<About />}/>
                    <Route path="/contact" element={<Contact />}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
