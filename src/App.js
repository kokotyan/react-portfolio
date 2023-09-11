import "./App.css";
import Header from "./components/Header";
import Hobby from "./components/Hobby";
import Overview from "./components/Overview";
import Skills from "./components/Skills";
import Works from "./components/Works";
import NewsSection from "./components/NewsSection";
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
          <Route path="/" element={<Hobby />} />
          <Route path="/" element={<NewsSection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
