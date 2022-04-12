
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aim1 from "./pages/Program 1/Aim1";
import Home from "./components/Home";
import Simulation from './pages/Program 1/Simulation';
import Theory1 from './pages/Program 1/Theory1';
import PreTest1 from "./pages/Program 1/PreTest1";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aim1" element={<Aim1 />} />,
        <Route path="/sim1" element={<Simulation />} />,
        <Route path="/theory1" element={<Theory1 />} />
        <Route path="/pretest1" element={<PreTest1/>} />
      </Routes>
    </Router>
  );
}

export default App;
