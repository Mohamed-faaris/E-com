import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <nav className="mb-4 p-4 bg-gray-100 shadow-md">
        <Link
          to="/"
          className="mr-4 text-xl font-bold text-gray-800 hover:text-blue-500"
        >
          E-com
        </Link>
        <Link to="/about" className="mr-4 text-blue-500 hover:underline">
          About
        </Link>
        <Link to="/products" className="text-blue-500 hover:underline">
          Products
        </Link>
      </nav>
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
