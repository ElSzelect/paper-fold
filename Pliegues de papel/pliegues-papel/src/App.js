import "./App.css";
import { Route } from "react-router-dom";
import LandingPage from "./components/landingPage";
import { Routes } from "react-router-dom";
import Home from "./components/home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        
      </Routes>
    </div>
  );
}

export default App;
