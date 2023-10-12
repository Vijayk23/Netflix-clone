import "./App.css";
import Loginform from "./Loginform";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Whowatch from "./Whowatch";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Loginform />} />
          <Route path="Watching" element={<Whowatch />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
