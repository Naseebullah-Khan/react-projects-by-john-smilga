import React from "react";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="*" element={<Error></Error>} />
      </Routes>
    </Router>
  );
}

export default App;
