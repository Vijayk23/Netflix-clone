import "./App.css";
import Loginform from "./Loginform";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Whowatch from "./Whowatch";
import Addusers from "./Addusers";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Loginform />} />
          <Route path="Watching" element={<Whowatch />} />
          <Route path="Addusers" element={<Addusers />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
