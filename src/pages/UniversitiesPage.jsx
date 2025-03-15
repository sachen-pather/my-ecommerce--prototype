import React, { useState } from "react";
import {
  GraduationCap,
  Check,
  Globe,
  DollarSign,
  Recycle,
  BarChart3,
  ArrowRight,
  Search,
} from "lucide-react";

const UniversitiesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Mock university partner data
  const universities = [
    {
      id: 1,
      name: "University of Cape Town",
      logo: "/images/universities/berkeley.jpg",
      location: "Cape Town, RSA",
      studentsServed: 1245,
      devicesSaved: 476,
      co2Reduced: "33,320kg",
      description:
        "UCT was one of our first university partners, establishing a campus-wide e-waste program that has seen tremendous success among students and faculty.",
      highlights: [
        "Campus tech center processes all devices",
        "Student-run collection program",
        "Sustainability credits for participants",
      ],
    },
    {
      id: 2,
      name: "University of Bath",
      logo: "/images/universities/stanford.jpg",
      location: "Bath, UK",
      studentsServed: 978,
      devicesSaved: 412,
      co2Reduced: "28,840kg",
      description:
        "Univerity of Bath's partnership has focused on integrating our platform with their existing sustainability initiatives, creating a comprehensive approach to campus e-waste.",
      highlights: [
        "Dedicated e-waste lab space",
        "Faculty research integration",
        "Graduate student management",
      ],
    },
    {
      id: 3,
      name: "University of Newcastle",
      logo: "/images/universities/mit.jpg",
      location: "Newcastle, UK",
      studentsServed: 864,
      devicesSaved: 392,
      co2Reduced: "27,440kg",
      description:
        "University of Newcastle has pioneered innovative approaches to device testing and refurbishment, establishing new standards for our quality verification process.",
      highlights: [
        "Engineering department oversight",
        "Advanced testing protocols",
        "Specialized repair services",
      ],
    },
    {
      id: 4,
      name: "University of Pretoria",
      logo: "/images/universities/ucla.jpg",
      location: "Pretoria, RSA",
      studentsServed: 752,
      devicesSaved: 318,
      co2Reduced: "22,260kg",
      description:
        "UP's program emphasizes accessibility, with a focus on ensuring underserved student populations have priority access to quality technology.",
      highlights: [
        "Financial aid integration",
        "Need-based distribution",
        "Equity-focused approach",
      ],
    },
    {
      id: 5,
      name: "University of Cologne",
      logo: "/images/universities/harvard.jpg",
      location: "Cologne, Germany",
      studentsServed: 586,
      devicesSaved: 247,
      co2Reduced: "17,290kg",
      description:
        "University of Cologne has integrated our platform with their campus IT services, creating a seamless experience for students and staff.",
      highlights: [
        "IT department partnership",
        "Staff training program",
        "Alumni donation channel",
      ],
    },
    {
      id: 6,
      name: "University of Nottingham",
      logo: "/images/universities/michigan.jpg",
      location: "Nottingham, UK",
      studentsServed: 493,
      devicesSaved: 214,
      co2Reduced: "14,980kg",
      description:
        "Nottingham's program has been particularly successful at engaging their engineering and computer science departments in device refurbishment.",
      highlights: [
        "Course credit for repairs",
        "Tech internship program",
        "Cross-department collaboration",
      ],
    },
  ];

  // Filter universities based on search query
  const filteredUniversities = universities.filter(
    (university) =>
      university.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      university.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-indigo-900 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Partner Universities
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            We work with leading universities to reduce e-waste and make
            technology more accessible for students.
          </p>
        </div>
      </div>

      {/* Search Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="relative max-w-md mx-auto mb-12">
          <input
            type="text"
            placeholder="Search universities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Search
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>

        {/* University List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredUniversities.map((university) => (
            <div
              key={university.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700 flex flex-col"
            >
              <div className="h-48 bg-gray-700 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Placeholder for university logo */}
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                    <GraduationCap size={40} className="text-gray-800" />
                  </div>
                </div>
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-white mb-1">
                  {university.name}
                </h3>
                <p className="text-gray-400 mb-4 flex items-center text-sm">
                  <Globe size={16} className="mr-1" /> {university.location}
                </p>
                <p className="text-gray-300 mb-4">{university.description}</p>
                <ul className="mb-4">
                  {university.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start mb-2">
                      <Check
                        size={18}
                        className="text-green-400 mr-2 flex-shrink-0 mt-0.5"
                      />
                      <span className="text-gray-300 text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-900 p-4 grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="text-sm text-gray-400">Students</p>
                  <p className="text-xl font-bold text-white">
                    {university.studentsServed}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Devices</p>
                  <p className="text-xl font-bold text-white">
                    {university.devicesSaved}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">CO₂ Saved</p>
                  <p className="text-xl font-bold text-white">
                    {university.co2Reduced}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredUniversities.length === 0 && (
          <div className="text-center py-12">
            <GraduationCap size={48} className="text-gray-700 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              No universities found
            </h3>
            <p className="text-gray-400">
              Try a different search term or check back later.
            </p>
          </div>
        )}

        {/* Why Partner With Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Why Universities Partner With Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
              <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <Recycle size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Sustainability Goals
              </h3>
              <p className="text-gray-300">
                Our platform helps universities achieve their sustainability
                targets by significantly reducing electronic waste on campus and
                measuring environmental impact.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
              <div className="w-12 h-12 bg-green-900 rounded-full flex items-center justify-center mb-4">
                <DollarSign size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Fee Revenue
              </h3>
              <p className="text-gray-300">
                Universities receive a portion of each transaction fee, creating
                a sustainable revenue stream that supports campus e-waste and
                sustainability initiatives.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
              <div className="w-12 h-12 bg-purple-900 rounded-full flex items-center justify-center mb-4">
                <BarChart3 size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Impact Metrics
              </h3>
              <p className="text-gray-300">
                Our dashboard provides detailed metrics on waste reduction,
                carbon savings, and student engagement, valuable data for
                sustainability reporting.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
              <div className="w-12 h-12 bg-yellow-900 rounded-full flex items-center justify-center mb-4">
                <GraduationCap size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Student Experience
              </h3>
              <p className="text-gray-300">
                Students gain access to affordable, quality technology while
                learning about sustainability through direct participation in
                the circular economy.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
              <div className="w-12 h-12 bg-red-900 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-tools text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Training Opportunities
              </h3>
              <p className="text-gray-300">
                The platform creates hands-on training opportunities for
                students in IT, sustainability, and business programs through
                internships and work-study positions.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
              <div className="w-12 h-12 bg-indigo-900 rounded-full flex items-center justify-center mb-4">
                <Globe size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Campus Reputation
              </h3>
              <p className="text-gray-300">
                Being part of our network enhances your university's reputation
                as a leader in sustainability and practical environmental
                initiatives.
              </p>
            </div>
          </div>
        </div>

        {/* Partnership Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Partnership Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline connector */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-700 transform -translate-x-1/2"></div>

              {/* Steps */}
              <div className="space-y-12">
                <div className="relative md:flex items-center">
                  <div className="hidden md:block w-1/2 pr-12 text-right">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Initial Consultation
                    </h3>
                    <p className="text-gray-300">
                      We meet with your sustainability and IT teams to discuss
                      your specific needs and goals.
                    </p>
                  </div>
                  <div className="absolute md:static left-0 top-0 md:left-auto md:top-auto flex items-center justify-center w-12 h-12 bg-blue-700 rounded-full text-white font-bold z-10 md:transform md:-translate-x-1/3">
                    1
                  </div>
                  <div className="md:hidden ml-16 mb-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Initial Consultation
                    </h3>
                    <p className="text-gray-300">
                      We meet with your sustainability and IT teams to discuss
                      your specific needs and goals.
                    </p>
                  </div>
                  <div className="md:w-1/2 md:pl-12">
                    {/* Empty for layout on desktop */}
                  </div>
                </div>

                <div className="relative md:flex items-center">
                  <div className="md:w-1/2 md:pr-12">
                    {/* Empty for layout on desktop */}
                  </div>
                  <div className="absolute md:static left-0 top-0 md:left-auto md:top-auto flex items-center justify-center w-12 h-12 bg-blue-700 rounded-full text-white font-bold z-10 md:transform md:-translate-x-1/3">
                    2
                  </div>
                  <div className="ml-16 md:ml-0 md:w-1/2 md:pl-12">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Platform Integration
                    </h3>
                    <p className="text-gray-300">
                      We customize our platform to integrate with your
                      university's systems and branding.
                    </p>
                  </div>
                </div>

                <div className="relative md:flex items-center">
                  <div className="hidden md:block w-1/2 pr-12 text-right">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Launch & Growth
                    </h3>
                    <p className="text-gray-300">
                      We support your campus launch with marketing materials and
                      regular check-ins to ensure success.
                    </p>
                  </div>
                  <div className="absolute md:static left-0 top-0 md:left-auto md:top-auto flex items-center justify-center w-12 h-12 bg-blue-700 rounded-full text-white font-bold z-10 md:transform md:-translate-x-1/3">
                    3
                  </div>
                  <div className="md:hidden ml-16">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Launch & Growth
                    </h3>
                    <p className="text-gray-300">
                      We support your campus launch with marketing materials and
                      regular check-ins to ensure success.
                    </p>
                  </div>
                  <div className="md:w-1/2 md:pl-12">
                    {/* Empty for layout on desktop */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-lg p-8 shadow-lg text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Become a Partner University
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join our network of forward-thinking universities and make a
            measurable impact on e-waste reduction while providing valuable
            services to your campus community.
          </p>
          <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center mx-auto">
            Contact Our Partnership Team
            <ArrowRight size={20} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UniversitiesPage;
