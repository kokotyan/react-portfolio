import "./App.css";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Hobby from "./components/Hobby";
import News from "./components/News";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router basename="/react-portfolio"> 
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Works" element={<Works />} />
          <Route path="/Hobby" element={<Hobby />} />
          <Route path="/News" element={<News />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
