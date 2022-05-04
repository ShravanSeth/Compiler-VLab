
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aim1 from "./pages/Program 1/Aim1";
import Simulation from './pages/Program 1/Simulation';
import Theory1 from './pages/Program 1/Theory1';
import PreTest1 from "./pages/Program 1/PreTest1";
import { Landing } from "./pages/Landing";

import '@fortawesome/fontawesome-free/css/all.min.css';

// Tailwind CSS Style Sheet
import './assets/styles/tailwind.css';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing/>} />
        <Route path="/aim1" element={<Aim1 />} />,
        <Route path="/sim1" element={<Simulation />} />,
        <Route path="/theory1" element={<Theory1 />} />
        <Route path="/pretest1" element={<PreTest1/>} />
      </Routes>
    </Router>
  );
}

export default App;
