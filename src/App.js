import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<div>Homepage</div>} />
        <Route
          path={"testing"}
          element={
            <div>
              <h2>testing</h2>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
