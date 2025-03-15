"use client";

import { Link } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

// ProductCard.jsx - Add e-waste specific information

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="group relative bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {/* University Badge instead of Discount */}
      {product.university && (
        <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-md z-10">
          {product.university}
        </div>
      )}

      {/* Condition Badge */}
      <div className="absolute top-2 right-2 bg-gray-600 text-white text-xs font-semibold px-2 py-1 rounded-md z-10">
        {product.condition || "Used"}
      </div>

      {/* Product Image */}
      <Link to={`/products/${product.id}`} className="block">
        <div className="h-48 overflow-hidden">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="text-sm text-gray-400">{product.category}</h3>
          <h2 className="font-semibold text-white mt-1">{product.name}</h2>

          {/* Additional Details */}
          <div className="mt-1 text-xs text-gray-400">
            Age: {product.age || "Unknown"}
          </div>

          {/* Environmental Impact */}
          {product.environmentalImpact && (
            <div className="mt-1 flex items-center">
              <span className="text-xs text-green-400">
                🌱 Saves {product.environmentalImpact.carbonSaved} CO₂
              </span>
            </div>
          )}

          {/* Quality Verification */}
          {product.qualityVerification && (
            <div className="mt-1 flex items-center">
              <span className="text-xs text-blue-400">
                ✓ Verified by {product.qualityVerification.verifiedBy}
              </span>
            </div>
          )}

          {/* Price */}
          <div className="mt-2 flex items-center">
            <span className="font-semibold text-white">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="ml-2 text-xs text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </Link>

      {/* Add to Cart Button */}
      <div className="px-4 pb-4">
        <button
          onClick={handleAddToCart}
          className="w-full bg-blue-600 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-blue-500 transition-colors"
        >
          <ShoppingCart size={16} />
          Reserve Device
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
