import { ChevronRight, Check, Recycle, DollarSign } from "lucide-react";
import FeaturedCategories from "../components/FeaturedCategories";
import ProductGrid from "../components/ProductGrid";

// Mock featured products data
const featuredProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Audio",
    price: 99.99,
    originalPrice: 129.99,
    discount: 23,
    image: "/images/wirelessheadphones.jpg",
    rating: 4.5,
    reviews: 120,
  },
  {
    id: 2,
    name: "Iphone 14 Pro",
    category: "Smartphones",
    price: 199.99,
    originalPrice: 249.99,
    discount: 20,
    image: "/images/iphone14.jpg",
    rating: 4.8,
    reviews: 95,
  },
  {
    id: 3,
    name: "150 Watt Universal Laptop Charger",
    category: "Chargers",
    price: 29.99,
    originalPrice: null,
    discount: 0,
    image: "/images/universalcharger.jpeg",
    rating: 4.4,
    reviews: 37,
  },
  {
    id: 4,
    name: "Macbook Pro 2019",
    category: "Laptops",
    price: 24.99,
    originalPrice: 34.99,
    discount: 28,
    image: "/images/macbookpro2019.jpg",
    rating: 4.6,
    reviews: 89,
  },
];

const HomePage = () => {
  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen">
      <FeaturedCategories />

      {/* Featured Products Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Featured Products
            </h2>
            <a
              href="/products"
              className="text-primary hover:text-primary/90 flex items-center text-sm font-medium transition-colors"
            >
              View all <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </div>
          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-30"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-10 shadow-xl border border-gray-800">
            <h3 className="text-3xl font-bold mb-10 text-center text-white">
              How Our Platform Works
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center relative">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/20">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h4 className="font-semibold mb-3 text-white text-xl">
                  Universities Verify Devices
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Tech centers at each university inspect, test, and refurbish
                  devices before listing them on our platform.
                </p>
                {/* Connector line for desktop */}
                <div className="hidden md:block absolute top-8 left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-0.5 bg-gradient-to-r from-primary/50 to-primary/0"></div>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/20">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h4 className="font-semibold mb-3 text-white text-xl">
                  Browse & Reserve
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Students and faculty browse verified devices and reserve items
                  for pickup at their campus location.
                </p>
                {/* Connector line for desktop */}
                <div className="hidden md:block absolute top-8 left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-0.5 bg-gradient-to-r from-primary/50 to-primary/0"></div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/20">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h4 className="font-semibold mb-3 text-white text-xl">
                  Reduce E-Waste Impact
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Each device exchanged extends the lifecycle of electronics and
                  reduces the environmental impact of e-waste.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white tracking-tight">
              Why Choose Our Platform
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              We connect university communities to reduce e-waste and make
              technology more affordable for students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] border border-gray-800/50 group">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Check className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Verified Quality
              </h3>
              <p className="text-gray-300 leading-relaxed">
                All devices are tested and verified by university tech centers
                before listing, ensuring reliable performance.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] border border-gray-800/50 group">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Recycle className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Reduce E-Waste
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Extend the life of electronic devices and reduce environmental
                impact through our sustainable marketplace.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] border border-gray-800/50 group">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <DollarSign className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Affordable Technology
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Access quality devices at a fraction of retail prices, perfect
                for student budgets and educational needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl p-10 text-center shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Ready to find your next device?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of students and faculty who are saving money and
              reducing e-waste.
            </p>
            <a
              href="/products"
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Browse Devices
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
