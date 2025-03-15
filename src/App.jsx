import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import { CartProvider } from "./context/CartContext";
import OurMission from "./pages/OurMission";
import UniversitiesPage from "./pages/UniversitiesPage";
import ImpactDashboardPage from "./pages/ImpactDashboardPage";
import LearnMorePage from "./pages/LearnMorePage";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:id" element={<ProductDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/our-mission" element={<OurMission />} />
              <Route path="/universities" element={<UniversitiesPage />} />
              <Route
                path="/impact-dashboard"
                element={<ImpactDashboardPage />}
              />
              <Route path="/learn-more" element={<LearnMorePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
