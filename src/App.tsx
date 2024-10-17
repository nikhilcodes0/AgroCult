import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/stats" element={<Home />}/>
          <Route path="/" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
