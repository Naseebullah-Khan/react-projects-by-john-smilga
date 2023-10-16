import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";

// Link in react-router-dom: When you want to navigate through your project
// a-> href -> When you want to go to outside of your project.

function App() {
  return (
    <BrowserRouter>
      {/* <nav>our navbar</nav> */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      {/* <footer>our footer</footer> */}
    </BrowserRouter>
  );
}

export default App;
