import './App.css';
import Header from './components/Header';
import Hobby from './components/Hobby';
import Overview from './components/Overview';
import Skills from './components/Skills';
import Works from './components/Works';
import News from './components/News';
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>

      <Routes>
        <Route path="/" element={<Overview/>}/>
        <Route path="/" element={<Skills/>}/>
        <Route path="/" element={<Works/>}/>
        <Route path="/" element={<Hobby/>}/>
        <Route path="/" element={<News/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
