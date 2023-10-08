import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";

// Link in react-router-dom: When you want to navigate through your project
// a-> href -> When you want to go to outside of your project.

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
