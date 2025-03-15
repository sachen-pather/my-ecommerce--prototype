import { Link } from "react-router-dom";
import {
  Laptop,
  Smartphone,
  Tablet,
  Headphones,
  Camera,
  Gamepad,
} from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Laptops",
    image: "/images/laptop.jpeg",
    count: 42,
    icon: Laptop,
    description: "Second hand laptops from top brands",
    savedCO2: "4,800kg",
  },
  {
    id: 2,
    name: "Smartphones",
    image: "/images/smartphone.jpg",
    count: 65,
    icon: Smartphone,
    description: "Quality certified used phones",
    savedCO2: "3,250kg",
  },
  {
    id: 3,
    name: "Tablets",
    image: "/images/tablet.jpg",
    count: 28,
    icon: Tablet,
    description: "Verified tablets at student prices",
    savedCO2: "2,100kg",
  },
  {
    id: 4,
    name: "Audio",
    image: "/images/headphones.jpeg",
    count: 37,
    icon: Headphones,
    description: "Headphones, speakers & more",
    savedCO2: "950kg",
  },
  {
    id: 5,
    name: "Cameras",
    image: "/images/camera.jpeg",
    count: 19,
    icon: Camera,
    description: "Digital cameras & accessories",
    savedCO2: "1,200kg",
  },
  {
    id: 6,
    name: "Chargers",
    image: "/images/charger.jpg",
    count: 18,
    icon: Camera,
    description: "Laptop & phone chargers",
    savedCO2: "1,000kg",
  },
];

const FeaturedCategories = () => {
  return (
    <section className="py-12 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-2">
          Browse by Device Type
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-8">
          All devices are verified and quality-checked by university tech
          centers
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/products?category=${category.name.toLowerCase()}`}
              className="group"
            >
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="relative">
                  <div className="aspect-square overflow-hidden bg-gray-700">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-30 group-hover:opacity-0 transition-opacity">
                    <category.icon size={48} className="text-primary" />
                  </div>
                </div>
                <div className="p-4 text-center flex-grow flex flex-col">
                  <h3 className="font-semibold text-gray-100 mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-2 flex-grow">
                    {category.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="bg-green-900 text-green-400 text-xs rounded-full px-2 py-1">
                      <span className="whitespace-nowrap">
                        CO₂ saved: {category.savedCO2}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400 whitespace-nowrap">
                      {category.count} devices
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
