"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Filter, ChevronDown, Zap, Info, BadgeCheck } from "lucide-react";
import ProductGrid from "../components/ProductGrid";

// Mock products data with e-waste specific fields
const allProducts = [
  {
    id: 1,
    name: "MacBook Pro 2019",
    category: "Laptops",
    price: 599.99,
    condition: "Good",
    age: "2 years",
    university: "University of Pretoria",
    qualityScore: 8.5,
    image: "/images/macbookpro2019.jpg",
    environmentalImpact: {
      carbonSaved: "120kg",
      wasteReduced: "2.3kg",
    },
    rating: 4.5,
    reviews: 28,
  },
  {
    id: 2,
    name: "iPad Pro 2020",
    category: "Tablets",
    price: 399.99,
    condition: "Excellent",
    age: "1 year",
    university: "University of Cologne",
    qualityScore: 9.2,
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
    age: "2 years",
    university: "University of Bath",
    qualityScore: 8.0,
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
    age: "1.5 years",
    university: "University of Newcastle",
    qualityScore: 8.7,
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
    age: "1 year",
    university: "University of Cape Town",
    qualityScore: 9.0,
    image: "/images/airpodspro.jpg",
    environmentalImpact: {
      carbonSaved: "25kg",
      wasteReduced: "0.3kg",
    },
    rating: 4.4,
    reviews: 41,
  },
  {
    id: 6,
    name: "Samsung Galaxy S20",
    category: "Smartphones",
    price: 349.99,
    condition: "Fair",
    age: "2 years",
    university: "University of Cape Town",
    qualityScore: 7.5,
    image: "/images/Samsung.jpg",
    environmentalImpact: {
      carbonSaved: "70kg",
      wasteReduced: "0.9kg",
    },
    rating: 4.1,
    reviews: 27,
  },
  {
    id: 7,
    name: "Microsoft Surface Pro 7",
    category: "Tablets",
    price: 499.99,
    condition: "Good",
    age: "1.5 years",
    university: "University of Pretoria",
    qualityScore: 8.3,
    image: "/images/microsoftsurfacepro.jpg",
    environmentalImpact: {
      carbonSaved: "95kg",
      wasteReduced: "1.8kg",
    },
    rating: 4.4,
    reviews: 31,
  },
  {
    id: 8,
    name: "Bose QuietComfort 35 II",
    category: "Audio",
    price: 159.99,
    condition: "Excellent",
    age: "1 year",
    university: "University of Bath",
    qualityScore: 9.1,
    image: "/images/bose.jpg",
    environmentalImpact: {
      carbonSaved: "30kg",
      wasteReduced: "0.4kg",
    },
    rating: 4.7,
    reviews: 52,
  },
  {
    id: 9,
    name: "Google Pixel 4",
    category: "Smartphones",
    price: 279.99,
    condition: "Good",
    age: "2 years",
    university: "University of Bath",
    qualityScore: 8.2,
    image: "/images/googlepixel4.jpeg",
    environmentalImpact: {
      carbonSaved: "60kg",
      wasteReduced: "0.7kg",
    },
    rating: 4.3,
    reviews: 38,
  },
  {
    id: 10,
    name: "Lenovo ThinkPad X1",
    category: "Laptops",
    price: 629.99,
    condition: "Good",
    age: "2 years",
    university: "University of Newcastle",
    qualityScore: 8.4,
    image: "/images/lenovothinkpad.jpeg",
    environmentalImpact: {
      carbonSaved: "125kg",
      wasteReduced: "2.4kg",
    },
    rating: 4.5,
    reviews: 29,
  },
  {
    id: 11,
    name: "Canon EOS Rebel T7",
    category: "Cameras",
    price: 329.99,
    condition: "Excellent",
    age: "1 year",
    university: "University of Cologne",
    qualityScore: 9.3,
    image: "/images/canoneos.jpg",
    environmentalImpact: {
      carbonSaved: "45kg",
      wasteReduced: "0.8kg",
    },
    rating: 4.6,
    reviews: 17,
  },
  {
    id: 12,
    name: "150W Universal Laptop Charger",
    category: "Chargers",
    price: 219.99,
    condition: "Good",
    age: "1.5 years",
    university: "University of Cologne",
    qualityScore: 8.6,
    image: "/images/universalcharger.jpeg",
    environmentalImpact: {
      carbonSaved: "40kg",
      wasteReduced: "0.6kg",
    },
    rating: 4.4,
    reviews: 45,
  },
];

// Filter options
const categories = [
  "All",
  "Laptops",
  "Smartphones",
  "Tablets",
  "Audio",
  "Cameras",
  "Gaming",
];
const universities = [
  "All",
  "University of Pretoria",
  "University of Cape Town",
  "University of Cologne",
  "University of Nottingham",
  "University of Newcastle",
  "University of Bath",
];
const conditions = ["All", "Excellent", "Good", "Fair"];
const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low-high", label: "Price: Low to High" },
  { value: "price-high-low", label: "Price: High to Low" },
  { value: "quality", label: "Quality Score" },
  { value: "environmental-impact", label: "Environmental Impact" },
  { value: "newest", label: "Newest" },
];

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedUniversity, setSelectedUniversity] = useState("All");
  const [selectedCondition, setSelectedCondition] = useState("All");
  const [selectedSort, setSelectedSort] = useState("featured");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [ageRange, setAgeRange] = useState([0, 3]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [totalEnvironmentalImpact, setTotalEnvironmentalImpact] = useState({
    carbonSaved: 0,
    wasteReduced: 0,
  });

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    const universityParam = searchParams.get("university");
    const conditionParam = searchParams.get("condition");

    if (categoryParam) {
      const formattedCategory =
        categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1);
      if (categories.includes(formattedCategory)) {
        setSelectedCategory(formattedCategory);
      }
    }

    if (universityParam) {
      const decodedUniversity = decodeURIComponent(universityParam);
      if (universities.includes(decodedUniversity)) {
        setSelectedUniversity(decodedUniversity);
      }
    }

    if (conditionParam) {
      const formattedCondition =
        conditionParam.charAt(0).toUpperCase() + conditionParam.slice(1);
      if (conditions.includes(formattedCondition)) {
        setSelectedCondition(formattedCondition);
      }
    }
  }, [searchParams]);

  useEffect(() => {
    let filteredProducts = [...allProducts];

    if (selectedCategory !== "All") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (selectedUniversity !== "All") {
      filteredProducts = filteredProducts.filter(
        (product) => product.university === selectedUniversity
      );
    }

    if (selectedCondition !== "All") {
      filteredProducts = filteredProducts.filter(
        (product) => product.condition === selectedCondition
      );
    }

    filteredProducts = filteredProducts.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    filteredProducts = filteredProducts.filter((product) => {
      const ageNumber = parseFloat(product.age);
      return ageNumber >= ageRange[0] && ageNumber <= ageRange[1];
    });

    switch (selectedSort) {
      case "price-low-high":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-high-low":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case "quality":
        filteredProducts.sort((a, b) => b.qualityScore - a.qualityScore);
        break;
      case "environmental-impact":
        filteredProducts.sort((a, b) => {
          const aCarbonSaved =
            parseFloat(a.environmentalImpact?.carbonSaved) || 0;
          const bCarbonSaved =
            parseFloat(b.environmentalImpact?.carbonSaved) || 0;
          return bCarbonSaved - aCarbonSaved;
        });
        break;
      case "newest":
        filteredProducts.sort((a, b) => {
          const aAge = parseFloat(a.age);
          const bAge = parseFloat(b.age);
          return aAge - bAge;
        });
        break;
      default:
        break;
    }

    const carbonSaved = filteredProducts.reduce((total, product) => {
      const carbon = parseFloat(product.environmentalImpact?.carbonSaved) || 0;
      return total + carbon;
    }, 0);

    const wasteReduced = filteredProducts.reduce((total, product) => {
      const waste = parseFloat(product.environmentalImpact?.wasteReduced) || 0;
      return total + waste;
    }, 0);

    setTotalEnvironmentalImpact({
      carbonSaved,
      wasteReduced,
    });

    setProducts(filteredProducts);
  }, [
    selectedCategory,
    selectedUniversity,
    selectedCondition,
    selectedSort,
    priceRange,
    ageRange,
  ]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", category.toLowerCase());
    }
    setSearchParams(searchParams);
  };

  const handleUniversityChange = (university) => {
    setSelectedUniversity(university);
    if (university === "All") {
      searchParams.delete("university");
    } else {
      searchParams.set("university", university);
    }
    setSearchParams(searchParams);
  };

  const handleConditionChange = (condition) => {
    setSelectedCondition(condition);
    if (condition === "All") {
      searchParams.delete("condition");
    } else {
      searchParams.set("condition", condition.toLowerCase());
    }
    setSearchParams(searchParams);
  };

  const handlePriceChange = (e, index) => {
    const newRange = [...priceRange];
    newRange[index] = Number(e.target.value);
    setPriceRange(newRange);
  };

  const handleAgeChange = (e, index) => {
    const newRange = [...ageRange];
    newRange[index] = Number(e.target.value);
    setAgeRange(newRange);
  };

  return (
    <div className="bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold">Browse Devices</h1>
          <p className="text-gray-400 mt-2">
            Explore our collection of verified refurbished electronics from
            university communities
          </p>
        </div>

        {/* Environmental Impact Summary */}
        <div className="mb-8 bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <Zap size={24} className="text-green-400 mr-3" />
              <div>
                <h3 className="font-semibold text-green-400">
                  Collective Environmental Impact
                </h3>
                <p className="text-sm text-gray-400">
                  These devices represent a total of:
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="bg-gray-900 rounded-lg px-4 py-2 text-center">
                <p className="text-sm text-gray-400">CO₂ Saved</p>
                <p className="font-bold text-green-400">
                  {totalEnvironmentalImpact.carbonSaved.toFixed(0)}kg
                </p>
              </div>
              <div className="bg-gray-900 rounded-lg px-4 py-2 text-center">
                <p className="text-sm text-gray-400">E-Waste Reduced</p>
                <p className="font-bold text-green-400">
                  {totalEnvironmentalImpact.wasteReduced.toFixed(1)}kg
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-20">
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-4">Universities</h3>
                <ul className="space-y-2 mb-6">
                  {universities.map((university) => (
                    <li key={university}>
                      <button
                        onClick={() => handleUniversityChange(university)}
                        className={`w-full text-left py-1 px-2 rounded ${
                          selectedUniversity === university
                            ? "bg-blue-600 text-white"
                            : "text-gray-300 hover:bg-gray-700"
                        }`}
                      >
                        {university}
                      </button>
                    </li>
                  ))}
                </ul>

                <h3 className="font-semibold text-lg mb-4">Device Types</h3>
                <ul className="space-y-2 mb-6">
                  {categories.map((category) => (
                    <li key={category}>
                      <button
                        onClick={() => handleCategoryChange(category)}
                        className={`w-full text-left py-1 px-2 rounded ${
                          selectedCategory === category
                            ? "bg-blue-600 text-white"
                            : "text-gray-300 hover:bg-gray-700"
                        }`}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>

                <h3 className="font-semibold text-lg mb-4">Condition</h3>
                <ul className="space-y-2 mb-6">
                  {conditions.map((condition) => (
                    <li key={condition}>
                      <button
                        onClick={() => handleConditionChange(condition)}
                        className={`w-full text-left py-1 px-2 rounded ${
                          selectedCondition === condition
                            ? "bg-blue-600 text-white"
                            : "text-gray-300 hover:bg-gray-700"
                        }`}
                      >
                        {condition}
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <h3 className="font-semibold text-lg mb-4">Price Range</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      step="50"
                      value={priceRange[0]}
                      onChange={(e) => handlePriceChange(e, 0)}
                      className="w-full accent-blue-600"
                    />
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      step="50"
                      value={priceRange[1]}
                      onChange={(e) => handlePriceChange(e, 1)}
                      className="w-full accent-blue-600"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-lg mb-4">Device Age</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>{ageRange[0]} years</span>
                      <span>{ageRange[1]} years</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="3"
                      step="0.5"
                      value={ageRange[0]}
                      onChange={(e) => handleAgeChange(e, 0)}
                      className="w-full accent-blue-600"
                    />
                    <input
                      type="range"
                      min="0"
                      max="3"
                      step="0.5"
                      value={ageRange[1]}
                      onChange={(e) => handleAgeChange(e, 1)}
                      className="w-full accent-blue-600"
                    />
                  </div>
                </div>

                <div className="bg-blue-900 p-4 rounded-lg text-sm text-blue-200">
                  <div className="flex items-start mb-2">
                    <BadgeCheck
                      size={16}
                      className="mr-1 flex-shrink-0 mt-0.5 text-blue-400"
                    />
                    <span className="font-medium">Quality Guarantee</span>
                  </div>
                  <p>
                    All devices listed have been verified by university tech
                    centers and come with a 30-day limited warranty.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort and Filter Controls */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-gray-700">
              <button
                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                className="lg:hidden flex items-center gap-2 text-gray-300 bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700"
              >
                <Filter size={18} />
                Filters
              </button>

              <div className="text-gray-400">
                Showing {products.length} devices
              </div>

              <div className="relative">
                <select
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.target.value)}
                  className="appearance-none bg-gray-800 border border-gray-700 rounded-md py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-100"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={16}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                />
              </div>
            </div>

            {/* Mobile Filters */}
            {mobileFiltersOpen && (
              <div className="lg:hidden mb-6 bg-gray-800 rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-4">Universities</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {universities.map((university) => (
                    <button
                      key={university}
                      onClick={() => handleUniversityChange(university)}
                      className={`py-1 px-3 rounded-full ${
                        selectedUniversity === university
                          ? "bg-blue-600 text-white"
                          : "bg-gray-900 border border-gray-700 text-gray-300"
                      }`}
                    >
                      {university}
                    </button>
                  ))}
                </div>

                <h3 className="font-semibold text-lg mb-4">Device Types</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`py-1 px-3 rounded-full ${
                        selectedCategory === category
                          ? "bg-blue-600 text-white"
                          : "bg-gray-900 border border-gray-700 text-gray-300"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                <h3 className="font-semibold text-lg mb-4">Condition</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {conditions.map((condition) => (
                    <button
                      key={condition}
                      onClick={() => handleConditionChange(condition)}
                      className={`py-1 px-3 rounded-full ${
                        selectedCondition === condition
                          ? "bg-blue-600 text-white"
                          : "bg-gray-900 border border-gray-700 text-gray-300"
                      }`}
                    >
                      {condition}
                    </button>
                  ))}
                </div>

                <h3 className="font-semibold text-lg mb-4">Price Range</h3>
                <div className="space-y-4 mb-4">
                  <div className="flex justify-between">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    step="50"
                    value={priceRange[0]}
                    onChange={(e) => handlePriceChange(e, 0)}
                    className="w-full accent-blue-600"
                  />
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    step="50"
                    value={priceRange[1]}
                    onChange={(e) => handlePriceChange(e, 1)}
                    className="w-full accent-blue-600"
                  />
                </div>

                <h3 className="font-semibold text-lg mb-4">Device Age</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>{ageRange[0]} years</span>
                    <span>{ageRange[1]} years</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="3"
                    step="0.5"
                    value={ageRange[0]}
                    onChange={(e) => handleAgeChange(e, 0)}
                    className="w-full accent-blue-600"
                  />
                  <input
                    type="range"
                    min="0"
                    max="3"
                    step="0.5"
                    value={ageRange[1]}
                    onChange={(e) => handleAgeChange(e, 1)}
                    className="w-full accent-blue-600"
                  />
                </div>
              </div>
            )}

            {/* Active Filters Display */}
            {(selectedCategory !== "All" ||
              selectedUniversity !== "All" ||
              selectedCondition !== "All" ||
              priceRange[0] > 0 ||
              priceRange[1] < 1000 ||
              ageRange[0] > 0 ||
              ageRange[1] < 3) && (
              <div className="mb-6 flex flex-wrap items-center gap-2">
                <span className="text-sm text-gray-400">Active filters:</span>

                {selectedCategory !== "All" && (
                  <span className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm flex items-center">
                    {selectedCategory}
                    <button
                      onClick={() => handleCategoryChange("All")}
                      className="ml-2 text-blue-200 hover:text-blue-400"
                    >
                      ×
                    </button>
                  </span>
                )}

                {selectedUniversity !== "All" && (
                  <span className="px-3 py-1 bg-green-900 text-green-200 rounded-full text-sm flex items-center">
                    {selectedUniversity}
                    <button
                      onClick={() => handleUniversityChange("All")}
                      className="ml-2 text-green-200 hover:text-green-400"
                    >
                      ×
                    </button>
                  </span>
                )}

                {selectedCondition !== "All" && (
                  <span className="px-3 py-1 bg-purple-900 text-purple-200 rounded-full text-sm flex items-center">
                    {selectedCondition} Condition
                    <button
                      onClick={() => handleConditionChange("All")}
                      className="ml-2 text-purple-200 hover:text-purple-400"
                    >
                      ×
                    </button>
                  </span>
                )}

                {(priceRange[0] > 0 || priceRange[1] < 1000) && (
                  <span className="px-3 py-1 bg-yellow-900 text-yellow-200 rounded-full text-sm flex items-center">
                    ${priceRange[0]} - ${priceRange[1]}
                    <button
                      onClick={() => setPriceRange([0, 1000])}
                      className="ml-2 text-yellow-200 hover:text-yellow-400"
                    >
                      ×
                    </button>
                  </span>
                )}

                {(ageRange[0] > 0 || ageRange[1] < 3) && (
                  <span className="px-3 py-1 bg-orange-900 text-orange-200 rounded-full text-sm flex items-center">
                    {ageRange[0]} - {ageRange[1]} years old
                    <button
                      onClick={() => setAgeRange([0, 3])}
                      className="ml-2 text-orange-200 hover:text-orange-400"
                    >
                      ×
                    </button>
                  </span>
                )}

                <button
                  onClick={() => {
                    handleCategoryChange("All");
                    handleUniversityChange("All");
                    handleConditionChange("All");
                    setPriceRange([0, 1000]);
                    setAgeRange([0, 3]);
                  }}
                  className="ml-2 text-sm text-gray-400 hover:text-blue-400"
                >
                  Clear all filters
                </button>
              </div>
            )}

            {/* Products */}
            {products.length > 0 ? (
              <ProductGrid products={products} />
            ) : (
              <div className="text-center py-12 bg-gray-800 rounded-lg">
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Info size={24} className="text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">No devices found</h3>
                <p className="text-gray-400 max-w-md mx-auto">
                  We couldn't find any devices that match your current filters.
                  Try adjusting your filter criteria or check back later as our
                  inventory is constantly updating.
                </p>
                <button
                  onClick={() => {
                    handleCategoryChange("All");
                    handleUniversityChange("All");
                    handleConditionChange("All");
                    setPriceRange([0, 1000]);
                    setAgeRange([0, 3]);
                  }}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}

            {/* Educational Information */}
            <div className="mt-12 bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">
                About Our E-Waste Exchange Program
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-lg mb-2">How It Works</h4>
                  <p className="text-gray-400 mb-4">
                    Our platform connects university communities to facilitate
                    the exchange of pre-owned electronic devices. Each device is
                    verified by university tech centers to ensure quality and
                    functionality.
                  </p>
                  <p className="text-gray-400">
                    When you purchase a device, you're not just saving money –
                    you're also extending the lifecycle of electronics and
                    reducing electronic waste.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-2">
                    Quality Standards
                  </h4>
                  <ul className="text-gray-400 space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span>
                        <strong>Excellent condition:</strong> Like new with
                        minimal signs of use (Quality Score: 9-10)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span>
                        <strong>Good condition:</strong> Fully functional with
                        some signs of use (Quality Score: 7-8.9)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span>
                        <strong>Fair condition:</strong> Functional with
                        noticeable wear (Quality Score: 5-6.9)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
