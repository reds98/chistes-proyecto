import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Categories from "./Categories";
import Navbar from "./Navbar";
import { ChistesProvider } from "./contexts/ChistesProvider";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ChistesProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      </ChistesProvider>
    </div>
  );
}

export default App;
