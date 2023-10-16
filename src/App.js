import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";

// Link in react-router-dom: When you want to navigate through your project
// a-> href -> When you want to go to outside of your project.

function App() {
  return (
    <BrowserRouter>
      <nav>our navbar</nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <footer>our footer</footer>
    </BrowserRouter>
  );
}

export default App;
