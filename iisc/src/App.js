import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Travel from "./pages/travel";
import Mode from "./pages/mode";

export default function App() {
    return (
        <Router>
          <Routes>
            <Route exact path="/" element={<Travel />} />
            <Route   path="/Second" element={<Mode />} />
          </Routes>
        </Router>
        
       
        
    );
}