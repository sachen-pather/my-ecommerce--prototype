"use client";

import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ShoppingCart,
  Heart,
  Star,
  Truck,
  RotateCcw,
  Shield,
  Check,
  Info,
} from "lucide-react";
import { useCart } from "../context/CartContext";
import ProductGrid from "../components/ProductGrid";

// Mock product data with e-waste specific properties
const product = {
  id: 1,
  name: "MacBook Pro 2019",
  category: "Laptops",
  price: 599.99,
  condition: "Good",
  age: "2 years",
  university: "UC Berkeley",
  description:
    "This MacBook Pro has been thoroughly tested and certified by UC Berkeley's Tech Center. The device is in good condition with minor cosmetic wear and excellent functionality. Perfect for students looking for a reliable laptop at an affordable price.",
  specifications: {
    processor: "Intel Core i5 2.4GHz",
    memory: "8GB RAM",
    storage: "256GB SSD",
    display: "13.3-inch Retina Display",
    graphics: "Intel Iris Plus Graphics 655",
    batteryHealth: "87%",
    operatingSystem: "macOS Monterey",
  },
  qualityVerification: {
    verifiedBy: "UC Berkeley Tech Center",
    verificationDate: "2023-11-15",
    score: 8.5,
    notes:
      "Battery and keyboard recently replaced. All ports and features working properly.",
  },
  environmentalImpact: {
    carbonSaved: "120kg",
    wasteReduced: "2.3kg",
    waterSaved: "3,400 liters",
    extendedLifespan: "3+ years",
  },
  features: [
    "Recently serviced battery",
    "New keyboard installed",
    "Latest OS preinstalled",
    "Factory reset and sanitized",
    "All ports and connections tested",
  ],
  images: ["/images/secondhandmacbook.jpg"],
  colors: ["Silver"],
  rating: 4.5,
  reviews: 28,
  stock: 3,
};

// Mock related products with e-waste specific properties
const relatedProducts = [
  {
    id: 2,
    name: "iPad Pro 2020",
    category: "Tablets",
    price: 399.99,
    condition: "Excellent",
    university: "UC Berkeley",
    image: "/images/ipadpro2020.jpg",
    environmentalImpact: {
      carbonSaved: "85kg",
      wasteReduced: "1.2kg",
    },
    rating: 4.8,
    reviews: 19,
  },
  {
    id: 3,
    name: "iPhone 11",
    category: "Smartphones",
    price: 299.99,
    condition: "Good",
    university: "Stanford",
    image: "/images/iphone11.jpg",
    environmentalImpact: {
      carbonSaved: "65kg",
      wasteReduced: "0.8kg",
    },
    rating: 4.3,
    reviews: 34,
  },
  {
    id: 4,
    name: "Dell XPS 13",
    category: "Laptops",
    price: 549.99,
    condition: "Good",
    university: "UCLA",
    image: "/images/dellxps13.jpeg",
    environmentalImpact: {
      carbonSaved: "110kg",
      wasteReduced: "2.1kg",
    },
    rating: 4.6,
    reviews: 22,
  },
  {
    id: 5,
    name: "AirPods Pro",
    category: "Audio",
    price: 129.99,
    condition: "Excellent",
    university: "MIT",
    image: "/images/airpodspro.jpg",
    environmentalImpact: {
      carbonSaved: "25kg",
      wasteReduced: "0.3kg",
    },
    rating: 4.4,
    reviews: 41,
  },
];

const ProductDetailPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [mainImage, setMainImage] = useState(product.images[0]);

  const handleAddToCart = () => {
    addToCart({
      ...product,
      image: product.images[0],
    });
  };

  const platformFee = product.price * 0.05;
  const universityFee = product.price * 0.1;
  const sellerAmount = product.price * 0.85;

  return (
    <div className="bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="text-sm mb-6">
          <ol className="flex items-center space-x-2">
            <li>
              <Link to="/" className="text-gray-400 hover:text-blue-400">
                Home
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link
                to="/products"
                className="text-gray-400 hover:text-blue-400"
              >
                Devices
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link
                to={`/products?category=${product.category.toLowerCase()}`}
                className="text-gray-400 hover:text-blue-400"
              >
                {product.category}
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-100 font-medium">{product.name}</li>
          </ol>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Product Images */}
          <div className="lg:w-1/2">
            <div className="mb-4">
              <img
                src={mainImage || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-auto rounded-lg border border-gray-700"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setMainImage(image)}
                  className={`border rounded-md overflow-hidden ${
                    mainImage === image ? "border-blue-500" : "border-gray-700"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} - View ${index + 1}`}
                    className="w-full h-auto"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:w-1/2">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              {product.name}
            </h1>

            {/* University Badge */}
            <div className="mb-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-900 text-blue-200">
                {product.university}
              </span>
              <span className="ml-2 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-800 text-gray-300">
                {product.condition} Condition
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400 mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={
                      i < Math.floor(product.rating) ? "currentColor" : "none"
                    }
                    className={
                      i < Math.floor(product.rating)
                        ? "text-yellow-400"
                        : "text-gray-600"
                    }
                  />
                ))}
              </div>
              <span className="text-gray-400">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-gray-100">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="ml-2 text-gray-500 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                    <span className="ml-2 bg-green-900 text-green-300 px-2 py-0.5 rounded text-sm font-medium">
                      {Math.round(
                        ((product.originalPrice - product.price) /
                          product.originalPrice) *
                          100
                      )}
                      % OFF
                    </span>
                  </>
                )}
              </div>
              <p className="text-green-400 text-sm mt-1">
                In Stock ({product.stock} available)
              </p>
            </div>

            {/* Device Age & Source */}
            <div className="mb-4 bg-gray-800 rounded-lg p-3">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <div className="flex items-center">
                  <span className="text-blue-400 font-medium mr-1">
                    Source:
                  </span>
                  <span>{product.university}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-400 font-medium mr-1">
                    Condition:
                  </span>
                  <span>{product.condition}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-400 font-medium mr-1">Age:</span>
                  <span>{product.age}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <p className="text-gray-400">{product.description}</p>
            </div>

            {/* Environmental Impact */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Environmental Impact</h3>
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                <div className="flex items-center mb-2">
                  <span className="text-lg mr-2">🌱</span>
                  <span className="font-medium text-green-400">
                    Sustainability Impact
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-900 p-2 rounded">
                    <p className="text-sm text-gray-400">CO₂ Emissions Saved</p>
                    <p className="font-medium text-green-400">
                      {product.environmentalImpact.carbonSaved}
                    </p>
                  </div>
                  <div className="bg-gray-900 p-2 rounded">
                    <p className="text-sm text-gray-400">E-Waste Reduced</p>
                    <p className="font-medium text-green-400">
                      {product.environmentalImpact.wasteReduced}
                    </p>
                  </div>
                  <div className="bg-gray-900 p-2 rounded">
                    <p className="text-sm text-gray-400">Water Saved</p>
                    <p className="font-medium text-green-400">
                      {product.environmentalImpact.waterSaved}
                    </p>
                  </div>
                  <div className="bg-gray-900 p-2 rounded">
                    <p className="text-sm text-gray-400">Extended Lifespan</p>
                    <p className="font-medium text-green-400">
                      {product.environmentalImpact.extendedLifespan}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality Verification */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Quality Verification</h3>
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center mr-2">
                    <Check size={16} className="text-blue-400" />
                  </div>
                  <span className="font-medium">
                    Verified by {product.qualityVerification.verifiedBy}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-2">
                  <div>
                    <p className="text-sm text-gray-400">Verification Date</p>
                    <p className="font-medium">
                      {product.qualityVerification.verificationDate}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Quality Score</p>
                    <p className="font-medium">
                      {product.qualityVerification.score}/10
                    </p>
                  </div>
                </div>
                <div className="text-sm text-gray-400 mt-2">
                  <p className="font-medium text-gray-300">Technician Notes:</p>
                  <p>{product.qualityVerification.notes}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-md font-medium flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
              >
                <ShoppingCart size={20} />
                Reserve Device
              </button>
              <button className="flex-1 border border-gray-700 text-gray-300 py-3 px-6 rounded-md font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
                <Heart size={20} />
                Add to Wishlist
              </button>
            </div>

            {/* Fee Distribution */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Fee Distribution</h3>
              <div className="bg-gray-800 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-2">
                  When you purchase this device:
                </p>
                <ul className="space-y-2 mb-3">
                  <li className="flex justify-between text-sm">
                    <span>Platform Fee (5%):</span>
                    <span className="font-medium">
                      ${platformFee.toFixed(2)}
                    </span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span>University Fee (10%):</span>
                    <span className="font-medium">
                      ${universityFee.toFixed(2)}
                    </span>
                  </li>
                  <li className="flex justify-between text-sm border-t border-gray-700 pt-2 mt-1">
                    <span>To Device Seller (85%):</span>
                    <span className="font-medium">
                      ${sellerAmount.toFixed(2)}
                    </span>
                  </li>
                </ul>
                <div className="text-xs text-gray-500 flex items-start gap-2">
                  <Info size={14} className="flex-shrink-0 mt-0.5" />
                  <span>
                    University fees support campus e-waste programs and
                    sustainability initiatives.
                  </span>
                </div>
              </div>
            </div>

            {/* Device Specifications */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Device Specifications</h3>
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                  {product.specifications &&
                    Object.entries(product.specifications).map(
                      ([key, value], index) => (
                        <div
                          key={key}
                          className={`flex justify-between p-3 ${
                            index % 2 === 0 ? "bg-gray-800" : "bg-gray-900"
                          }`}
                        >
                          <span className="text-gray-400 capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </span>
                          <span className="font-medium">{value}</span>
                        </div>
                      )
                    )}
                </div>
              </div>
            </div>

            {/* Pickup Info */}
            <div className="border-t border-gray-700 pt-6 space-y-4">
              <div className="flex items-start gap-3">
                <Truck
                  className="text-gray-400 flex-shrink-0 mt-0.5"
                  size={20}
                />
                <div>
                  <h4 className="font-medium">University Pickup</h4>
                  <p className="text-sm text-gray-400">
                    Available for pickup at {product.university} Tech Center
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <RotateCcw
                  className="text-gray-400 flex-shrink-0 mt-0.5"
                  size={20}
                />
                <div>
                  <h4 className="font-medium">7-Day Inspection Period</h4>
                  <p className="text-sm text-gray-400">
                    Test the device thoroughly after pickup
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield
                  className="text-gray-400 flex-shrink-0 mt-0.5"
                  size={20}
                />
                <div>
                  <h4 className="font-medium">Limited Warranty</h4>
                  <p className="text-sm text-gray-400">
                    30-day warranty on major functionality
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">
            Similar Refurbished Devices
          </h2>
          <ProductGrid products={relatedProducts} />
        </section>
      </div>
    </div>
  );
};

export default ProductDetailPage;
