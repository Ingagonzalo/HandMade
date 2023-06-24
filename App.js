import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import FAQ from "./pages/FAQ/FAQ";
import ColeccionesPage from "./pages/ColeccionesPage/ColeccionesPage";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import ProductsPage from "./pages/Products/ProductsPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Header />

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/faq" element={<FAQ />}></Route>
            <Route path="/products" element={<ProductsPage />}></Route>
            <Route path="/collection" element={<ColeccionesPage />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
