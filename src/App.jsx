import "./App.css";
import Loginform from "./components/Loginform";
import Home from "./components/home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Loginform />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
