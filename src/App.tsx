import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/aboutus" element={<About />} ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
