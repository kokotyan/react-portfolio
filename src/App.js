import "./App.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.js';
import Header from "./components/Header";
import Overview from "./components/Overview";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Hobby from "./components/Hobby";
import NewsSection from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/" element={<Works />} />
          <Route path="/Hobby.jsx" element={<Hobby />} />
          <Route path="/" element={<NewsSection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
