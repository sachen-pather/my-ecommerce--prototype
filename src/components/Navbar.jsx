"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X, Search, User, Heart } from "lucide-react";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-gray-900 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-white">
            <img
              src="/images/Logo.jpg"
              alt="StudentCircuits Logo"
              className="h-20 w-auto"
            />
            <span className="text-3xl font-extrabold">
              <span style={{ color: "#FF4500" }}>S</span>
              <span style={{ color: "#FFD700" }}>t</span>
              <span style={{ color: "#32CD32" }}>u</span>
              <span style={{ color: "#1E90FF" }}>d</span>
              <span style={{ color: "#FF69B4" }}>e</span>
              <span style={{ color: "#8A2BE2" }}>n</span>
              <span style={{ color: "#FF4500" }}>t</span>
              <span style={{ color: "#FFD700" }}>C</span>
              <span style={{ color: "#32CD32" }}>i</span>
              <span style={{ color: "#1E90FF" }}>r</span>
              <span style={{ color: "#FF69B4" }}>c</span>
              <span style={{ color: "#8A2BE2" }}>u</span>
              <span style={{ color: "#FF4500" }}>i</span>
              <span style={{ color: "#FFD700" }}>t</span>
              <span style={{ color: "#32CD32" }}>s</span>
            </span>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/products"
              className="text-lg font-semibold text-gray-300 hover:text-white transition-colors"
            >
              Browse Devices
            </Link>
            <Link
              to="/universities"
              className="text-lg font-semibold text-gray-300 hover:text-white transition-colors"
            >
              Universities
            </Link>
            <Link
              to="/impact-dashboard"
              className="text-lg font-semibold text-gray-300 hover:text-white transition-colors"
            >
              Impact Dashboard
            </Link>
            <Link
              to="/our-mission"
              className="text-lg font-semibold text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Mission
            </Link>
            <Link
              to="/"
              className="text-lg font-semibold text-gray-300 hover:text-white transition-colors"
            >
              Home
            </Link>
          </nav>
          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-300 hover:text-white transition-colors">
              <Search size={24} />
            </button>
            <button className="p-2 text-gray-300 hover:text-white transition-colors">
              <User size={24} />
            </button>
            <button className="p-2 text-gray-300 hover:text-white transition-colors">
              <Heart size={24} />
            </button>
            <Link
              to="/cart"
              className="p-2 text-gray-300 hover:text-white transition-colors relative"
            >
              <ShoppingCart size={24} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-white text-gray-900 text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <Link
              to="/cart"
              className="p-2 text-gray-300 hover:text-white transition-colors relative"
            >
              <ShoppingCart size={24} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-white text-gray-900 text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-300 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/products"
                className="text-lg font-semibold text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Browse Devices
              </Link>
              <Link
                to="/universities"
                className="text-lg font-semibold text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Universities
              </Link>
              <Link
                to="/impact-dashboard"
                className="text-lg font-semibold text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Impact Dashboard
              </Link>
              <Link
                to="/our-mission"
                className="text-lg font-semibold text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Mission
              </Link>
              <Link
                to="/"
                className="text-lg font-semibold text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
