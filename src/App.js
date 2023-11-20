import React from "react";
import { Routes, Switch, Route } from "react-router-dom";

import Home from "./Home";
import Movie from "./SingleMovie";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movies/:movieID" element={<Movie />} />
    </Routes>
  );
}

export default App;
