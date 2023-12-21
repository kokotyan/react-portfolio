import React from "react";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Hobby from "./components/Hobby";
import News from "./components/News";
import Footer from "./components/Footer";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Navigate to="/react-portfolio/Home" />} />
          <Route path="/react-portfolio/Home" element={<Home />} />
          <Route path="/react-portfolio/Skills" element={<Skills />} />
          <Route path="/react-portfolio/Works" element={<Works />} />
          <Route path="/react-portfolio/Hobby" element={<Hobby />} />
          <Route path="/react-portfolio/News" element={<News />} />
        </Routes>

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
