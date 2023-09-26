import "./App.css";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Hobby from "./components/Hobby";
import News from "./components/News";
import Footer from "./components/Footer";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/react-portfolio/Overview" element={<Overview />} />
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
