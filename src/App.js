import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";
// import components
import Navbar from "./components/Navbar";
import SharedLayout from "./pages/SharedLayout";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout navbar={<Navbar />} />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="cocktails/:cocktailId" element={<SingleCocktail />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
