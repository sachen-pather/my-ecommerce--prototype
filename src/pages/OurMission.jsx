import React from "react";
import {
  Leaf,
  BarChart3,
  Recycle,
  GraduationCap,
  Users,
  Heart,
} from "lucide-react";

const OurMission = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-blue-900 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Our Mission
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Creating a sustainable future by reducing e-waste and making
            technology accessible to all university students.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Vision Statement */}
        <div className="mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Our Vision
          </h2>
          <div className="bg-gray-800 rounded-lg p-8 shadow-lg border border-gray-700">
            <p className="text-xl text-gray-200 mb-6 italic font-light">
              "To create a circular economy for electronics within university
              communities, transforming the way students access and dispose of
              technology."
            </p>
            <p className="text-gray-300">
              At StudentCircuits, we believe that every electronic device has
              value beyond its first user. By facilitating the exchange of used
              devices within university communities, we're building a more
              sustainable future while making technology more affordable for
              students.
            </p>
          </div>
        </div>

        {/* The Problem We're Solving */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            The Problem We're Solving
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
              <div className="flex items-center mb-4">
                <BarChart3 size={28} className="text-red-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">
                  Growing E-Waste Crisis
                </h3>
              </div>
              <p className="text-gray-300">
                Electronic waste is the fastest-growing waste stream globally,
                with over 50 million metric tons generated each year. Most of
                this waste ends up in landfills, releasing toxic chemicals into
                the environment and wasting valuable resources.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
              <div className="flex items-center mb-4">
                <GraduationCap size={28} className="text-yellow-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">
                  Technology Affordability
                </h3>
              </div>
              <p className="text-gray-300">
                Many students struggle to afford the technology they need for
                their education. Meanwhile, universities and graduating students
                often have perfectly functional devices that go unused or are
                discarded prematurely.
              </p>
            </div>
          </div>
        </div>

        {/* Our Approach */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Our Approach
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-4">
                University Partnerships
              </h3>
              <p className="text-gray-300">
                We collaborate with university tech centers to verify,
                refurbish, and manage the physical exchange of devices. This
                creates campus jobs and ensures quality control.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
              <div className="w-16 h-16 bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Recycle size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-4">
                Circular Economy
              </h3>
              <p className="text-gray-300">
                Our platform facilitates a closed-loop system where devices
                remain within the university community, extending their useful
                life and reducing waste.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
              <div className="w-16 h-16 bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-4">
                Community Building
              </h3>
              <p className="text-gray-300">
                We're creating a community of environmentally conscious students
                and faculty who value sustainability and resource sharing.
              </p>
            </div>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Our Impact
          </h2>
          <div className="bg-gradient-to-r from-blue-900 to-green-900 rounded-lg p-8 shadow-lg">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-white mb-2">2,500+</div>
                <p className="text-xl text-gray-200">Devices Exchanged</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">
                  175,000 kg
                </div>
                <p className="text-xl text-gray-200">CO₂ Emissions Saved</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">12</div>
                <p className="text-xl text-gray-200">University Partners</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Goals */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Our Goals
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                Reduce Campus E-Waste by 50%
              </h3>
              <p className="text-gray-300">
                We aim to cut electronic waste in half at our partner
                universities by creating efficient systems for device
                collection, refurbishment, and redistribution.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                Expand to 50 Universities by 2026
              </h3>
              <p className="text-gray-300">
                We're scaling our impact by partnering with more universities
                across the country, bringing our sustainable technology exchange
                model to more campus communities.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                Make Technology Accessible for All
              </h3>
              <p className="text-gray-300">
                We're working to ensure that no student goes without the
                technology they need for their education due to financial
                constraints.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                Build a Sustainable Model
              </h3>
              <p className="text-gray-300">
                We're creating a self-sustaining platform that generates value
                for all stakeholders while continuing to grow our environmental
                impact.
              </p>
            </div>
          </div>
        </div>

        {/* Join Us */}
        <div className="bg-blue-900 rounded-lg p-8 shadow-lg text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Whether you're a student looking for affordable technology, a
            university interested in partnership, or someone passionate about
            reducing e-waste, we'd love to have you join our mission.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Partner With Us
            </button>
            <button className="bg-transparent text-white border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
