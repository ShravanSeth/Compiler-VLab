
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AimElement from "./pages/Program Component/AimElement";
import Home from "./components/Home";
// import Simulation from './pages/Program Component/Simulation';
import PreTest1 from "./pages/Program Component/PreTest1";
import TheoryElement from "./pages/Program Component/TheoryElement";
import Program1 from "./pages/Programs/Program1";
import LexicalAnalyser from "./pages/Programs/LexicalAnalyser";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aim1" element={<Program1/>} />,
        <Route path="/sim1" element={<LexicalAnalyser/>} />,
        <Route path="/theory1" element={<TheoryElement />} />
        <Route path="/pretest1" element={<PreTest1/>} />
      </Routes>
    </Router>
  );
}

export default App;
