import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Aim1 from './pages/Program 1/Aim1';
import Home from './components/Home';
import Simulation from './pages/Program 1/Simulation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Routes>
        <Route path="/prog1" element={<Aim1/>}/>
      </Routes>
      <Routes>
        <Route path="/sim1" element={<Simulation/>}/>
      </Routes>
    </Router>
  );
}

export default App;
