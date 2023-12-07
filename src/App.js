import NavbarCom from "./compoenents/Navbar";
import Slider from "./compoenents/Slider";
import { Routes, Route } from "react-router-dom";
import About from "./compoenents/About";
import ProductDetails from "./compoenents/ProductDetails";
import Product from "./compoenents/Product";
import Cart from "./compoenents/Cart";
import Contact from "./compoenents/Contact";
import ProductsList from "./compoenents/ProductsList";
function App() {
  return (
    <div className="App">
      <NavbarCom />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
             
              <Product />
            </>
          }
        />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart />} />
        <Route path="contact" element={<Contact />} />
        <Route path="product/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
