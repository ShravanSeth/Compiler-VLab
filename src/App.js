
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AimElement from "./pages/Program Component/AimElement";
import Home from "./components/Home";
// import Simulation from './pages/Program Component/Simulation';
import TheoryElement from "./pages/Program Component/TheoryElement";
import Program1 from "./pages/Programs/Program1";
import LexicalAnalyser from "./pages/Programs/LexicalAnalyser";
import Simulation from "./pages/Program Component/Simulation";
import data from "./config/data";
import ParseTree from "./pages/Programs/ParseTree";


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aim1" element={<AimElement value={data.program1}/>} />,
        <Route path="/sim1" element={<ParseTree/>} />,
        <Route path="/theory1" element={<TheoryElement value={data.program1}/>} />
      </Routes>
    </Router>
  );
}

export default App;
