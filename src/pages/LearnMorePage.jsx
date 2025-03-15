import { ArrowRight, Globe } from "lucide-react";

// SDGs data
const sdgData = [
  {
    id: 1,
    title: "No Poverty",
    color: "bg-red-600",
    description: "End poverty in all its forms everywhere.",
  },
  {
    id: 2,
    title: "Zero Hunger",
    color: "bg-orange-600",
    description: "End hunger, achieve food security and improved nutrition.",
  },
  {
    id: 3,
    title: "Good Health and Well-being",
    color: "bg-green-600",
    description: "Ensure healthy lives and promote well-being for all.",
  },
  {
    id: 4,
    title: "Quality Education",
    color: "bg-red-700",
    description: "Ensure inclusive and equitable quality education.",
  },
  {
    id: 5,
    title: "Gender Equality",
    color: "bg-orange-700",
    description: "Achieve gender equality and empower all women and girls.",
  },
  {
    id: 6,
    title: "Clean Water and Sanitation",
    color: "bg-blue-500",
    description:
      "Ensure availability and sustainable management of water and sanitation.",
  },
  {
    id: 7,
    title: "Affordable and Clean Energy",
    color: "bg-yellow-500",
    description: "Ensure access to affordable, reliable, sustainable energy.",
  },
  {
    id: 8,
    title: "Decent Work and Economic Growth",
    color: "bg-red-800",
    description:
      "Promote sustained, inclusive economic growth and decent work.",
  },
  {
    id: 9,
    title: "Industry, Innovation and Infrastructure",
    color: "bg-orange-800",
    description:
      "Build resilient infrastructure and promote sustainable industrialization.",
  },
  {
    id: 10,
    title: "Reduced Inequalities",
    color: "bg-pink-600",
    description: "Reduce income inequality within and among countries.",
  },
  {
    id: 11,
    title: "Sustainable Cities and Communities",
    color: "bg-yellow-600",
    description: "Make cities inclusive, safe, resilient, and sustainable.",
  },
  {
    id: 12,
    title: "Responsible Consumption and Production",
    color: "bg-orange-500",
    description: "Ensure sustainable consumption and production patterns.",
  },
  {
    id: 13,
    title: "Climate Action",
    color: "bg-green-700",
    description: "Take urgent action to combat climate change and its impacts.",
  },
  {
    id: 14,
    title: "Life Below Water",
    color: "bg-blue-600",
    description:
      "Conserve and sustainably use the oceans and marine resources.",
  },
  {
    id: 15,
    title: "Life on Land",
    color: "bg-green-500",
    description: "Protect and restore terrestrial ecosystems and biodiversity.",
  },
  {
    id: 16,
    title: "Peace, Justice and Strong Institutions",
    color: "bg-blue-700",
    description:
      "Promote peaceful and inclusive societies and access to justice.",
  },
  {
    id: 17,
    title: "Partnerships for the Goals",
    color: "bg-blue-800",
    description: "Strengthen global partnerships for sustainable development.",
  },
];

// Goals your platform directly tackles
const ourFocusGoals = [
  {
    id: 4,
    title: "Quality Education",
    description:
      "By providing affordable technology to students, we support access to quality education.",
  },
  {
    id: 9,
    title: "Industry, Innovation and Infrastructure",
    description:
      "We promote innovation by refurbishing devices and building sustainable tech infrastructure.",
  },
  {
    id: 12,
    title: "Responsible Consumption and Production",
    description:
      "Our platform reduces e-waste by encouraging reuse and responsible device lifecycles.",
  },
  {
    id: 13,
    title: "Climate Action",
    description:
      "Reducing e-waste helps lower carbon footprints and combat climate change.",
  },
];

const LearnMorePage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100 min-h-screen">
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-600 mix-blend-multiply"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-100 text-3xl sm:text-4xl font-bold leading-relaxed">
              With 2030 now just five years away, the Sustainable Development
              Goals (SDGs) represent an urgent global call to end poverty,
              protect the planet, and ensure prosperity for all. At our core, we
              believe university students are key to driving this change.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-950 to-transparent"></div>
      </section>
      <section className="py-8 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-200 text-2xl leading-relaxed tracking-wide">
              Our platform empowers students to raise awareness of the SDGs and
              tackle sustainability challenges in their communities by
              addressing a pressing issue: e-waste. By redistributing technology
              at affordable prices, we provide students with the tools they need
              to learn, innovate, and create solutions—turning campuses into
              hubs of sustainable action and amplifying the impact of the SDGs,
              one device at a time.
            </p>
          </div>
        </div>
      </section>

      {/* All SDGs Grid */}
      <section className="py-6 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-blue-400 mr-2" />
              <span className="text-sm font-medium uppercase tracking-wider text-blue-400">
                Global Goals
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              The 17 Sustainable Development Goals
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              These interconnected goals are designed to be a blueprint for
              achieving a better and more sustainable future for all.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sdgData.map((goal) => (
              <div
                key={goal.id}
                className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-xl overflow-hidden transition-all duration-300 hover:border-gray-500 hover:shadow-lg hover:shadow-blue-900/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-50"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div
                      className={`${goal.color} w-12 h-12 rounded-lg flex items-center justify-center shadow-lg`}
                    >
                      <span className="text-white font-bold text-lg">
                        {goal.id}
                      </span>
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">
                        {goal.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {goal.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Our Focus Section */}
      <section className="py-24 relative bg-gray-900/80">
        <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-1 mb-4 rounded-full bg-blue-900/20 border border-blue-800/30">
              <span className="px-4 py-1 text-sm font-medium text-blue-300">
                Our Impact
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              Our Contribution to the SDGs
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Through our platform, we directly address key SDGs by connecting
              university communities, reducing e-waste, and making technology
              accessible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ourFocusGoals.map((goal) => {
              // Map goal IDs to their original colors from sdgData
              const originalGoal = sdgData.find((sdg) => sdg.id === goal.id);
              const goalColor = originalGoal
                ? originalGoal.color
                : "bg-blue-600";

              return (
                <div
                  key={goal.id}
                  className="bg-gray-800/70 backdrop-blur-sm border border-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-gray-500 flex flex-col"
                >
                  <div
                    className={`${goalColor} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  >
                    <span className="text-white font-bold text-2xl">
                      {goal.id}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white text-center">
                    {goal.title}
                  </h3>
                  <p className="text-gray-300 text-center leading-relaxed flex-grow">
                    {goal.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-30"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Join Us in Making a Difference
            </h2>
            <p className="text-gray-300 text-lg mx-auto mb-10 leading-relaxed">
              By using our platform, you're not just getting affordable
              tech—you're contributing to a sustainable future aligned with the
              SDGs.
            </p>
            <button className="group relative inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white overflow-hidden bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-500 hover:to-green-500 transition-all duration-300 shadow-lg hover:shadow-xl">
              <span className="relative z-10">Get Involved</span>
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearnMorePage;
