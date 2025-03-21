import React, { useState } from "react";
import {
  BarChart3,
  BarChart,
  LineChart,
  PieChart,
  Recycle,
  Leaf,
  Users,
  CircleDollarSign,
  Calendar,
  Building,
  Download,
  ChevronDown,
} from "lucide-react";

const ImpactDashboardPage = () => {
  const [timeframe, setTimeframe] = useState("yearly");
  const [universityFilter, setUniversityFilter] = useState("all");

  // Dummy data for metrics
  const impactData = {
    totalDevicesExchanged: 2547,
    totalCO2Saved: 178290,
    totalWasteReduced: 5094,
    totalMoneyRaised: 152820,
    totalStudentsServed: 3821,
    monthlyGrowth: 14.3,
    devicesByType: [
      { type: "Laptops", count: 982, percentage: 38.6 },
      { type: "Smartphones", count: 734, percentage: 28.8 },
      { type: "Tablets", count: 412, percentage: 16.2 },
      { type: "Audio Devices", count: 186, percentage: 7.3 },
      { type: "Calculators", count: 124, percentage: 4.9 },
      { type: "Other", count: 109, percentage: 4.2 },
    ],
    topUniversities: [
      {
        name: "UCT - RSA",
        devicesExchanged: 476,
        co2Saved: 33320,
      },
      { name: "UoB - UK", devicesExchanged: 412, co2Saved: 28840 },
      {
        name: "UoN - UK",
        devicesExchanged: 392,
        co2Saved: 27440,
      },
      {
        name: "UP - RSA",
        devicesExchanged: 318,
        co2Saved: 22260,
      },
      { name: "UzK - Ger", devicesExchanged: 247, co2Saved: 17290 },
    ],
    monthlyData: [
      { month: "Jan", devices: 148, co2: 10360 },
      { month: "Feb", devices: 162, co2: 11340 },
      { month: "Mar", devices: 187, co2: 13090 },
      { month: "Apr", devices: 201, co2: 14070 },
      { month: "May", devices: 236, co2: 16520 },
      { month: "Jun", devices: 274, co2: 19180 },
      { month: "Jul", devices: 256, co2: 17920 },
      { month: "Aug", devices: 298, co2: 20860 },
      { month: "Sep", devices: 312, co2: 21840 },
      { month: "Oct", devices: 342, co2: 23940 },
      { month: "Nov", devices: 368, co2: 25760 },
      { month: "Dec", devices: 394, co2: 27580 },
    ],
    yearlyData: [
      { year: "2025", devices: 421, co2: 29470 },
      { year: "2026", devices: 632, co2: 44240 },
      { year: "2027", devices: 948, co2: 66360 },
      { year: "2028", devices: 1423, co2: 99610 },
      { year: "2029", devices: 2547, co2: 178290 },
    ],
    impactComparisons: [
      {
        metric: "CO2 Saved",
        value: "178,290 kg",
        equivalent: "39 cars taken off the road for a year",
      },
      {
        metric: "E-Waste Reduced",
        value: "5,094 kg",
        equivalent: "Weight of 3 cars",
      },
      {
        metric: "Water Saved",
        value: "7,641,000 liters",
        equivalent: "3 Olympic swimming pools",
      },
      {
        metric: "Energy Saved",
        value: "892,450 kWh",
        equivalent: "Power for 82 homes for a year",
      },
    ],
  };

  // Helper function to format large numbers
  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-green-900 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Environmental Impact Dashboard
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Track our progress in reducing e-waste and creating a more
            sustainable future through university partnerships.
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap justify-between items-center bg-gray-800 rounded-lg p-4 shadow-lg mb-8">
          <div className="flex items-center mb-4 sm:mb-0">
            <Calendar size={20} className="text-gray-400 mr-2" />
            <span className="text-white mr-3">Timeframe:</span>
            <div className="relative">
              <select
                value={timeframe}
                onChange={(e) => setTimeframe(e.target.value)}
                className="bg-gray-700 text-white border border-gray-600 rounded px-3 py-1 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="monthly">Monthly (2024)</option>
                <option value="yearly">Yearly (All Time)</option>
              </select>
              <ChevronDown
                size={16}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
              />
            </div>
          </div>
          <div className="flex items-center">
            <Building size={20} className="text-gray-400 mr-2" />
            <span className="text-white mr-3">University:</span>
            <div className="relative">
              <select
                value={universityFilter}
                onChange={(e) => setUniversityFilter(e.target.value)}
                className="bg-gray-700 text-white border border-gray-600 rounded px-3 py-1 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="all">All Universities</option>
                <option value="University of Cape Town">
                  University of Cape Town
                </option>
                <option value="University of Cologne">
                  University of Cologne
                </option>
                <option value="University of Bath">University of Bath</option>
                <option value="University of Pretoria">
                  University of Pretoria
                </option>
                <option value="University of Newcastle">
                  University of Newcastle
                </option>
              </select>
              <ChevronDown
                size={16}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
              />
            </div>
          </div>
          <button className="bg-gray-700 text-white px-4 py-1 rounded flex items-center hover:bg-gray-600 transition-colors">
            <Download size={16} className="mr-2" />
            Export Data
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="container mx-auto px-4 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg text-gray-300">Devices Exchanged</h3>
              <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center">
                <Recycle size={20} className="text-white" />
              </div>
            </div>
            <div className="flex items-baseline">
              <span className="text-3xl font-bold text-white">
                {formatNumber(impactData.totalDevicesExchanged)}
              </span>
              <span className="ml-2 text-sm text-green-400">
                +{impactData.monthlyGrowth}%
              </span>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Total devices kept from landfills
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg text-gray-300">CO₂ Saved</h3>
              <div className="w-10 h-10 bg-green-900 rounded-full flex items-center justify-center">
                <Leaf size={20} className="text-white" />
              </div>
            </div>
            <div className="flex items-baseline">
              <span className="text-3xl font-bold text-white">
                {formatNumber(impactData.totalCO2Saved)}
              </span>
              <span className="ml-2 text-xs text-gray-400">kg</span>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Equivalent to 39 cars for a year
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg text-gray-300">Students Served</h3>
              <div className="w-10 h-10 bg-purple-900 rounded-full flex items-center justify-center">
                <Users size={20} className="text-white" />
              </div>
            </div>
            <div className="flex items-baseline">
              <span className="text-3xl font-bold text-white">
                {formatNumber(impactData.totalStudentsServed)}
              </span>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Students with affordable technology
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg text-gray-300">Money Raised</h3>
              <div className="w-10 h-10 bg-yellow-900 rounded-full flex items-center justify-center">
                <CircleDollarSign size={20} className="text-white" />
              </div>
            </div>
            <div className="flex items-baseline">
              <span className="text-3xl font-bold text-white">
                ${formatNumber(impactData.totalMoneyRaised)}
              </span>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              For university sustainability programs
            </p>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="container mx-auto px-4 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Exchange Growth Chart - IMPROVED WITH LINE GRAPH */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <LineChart size={20} className="mr-2 text-blue-400" />
              Device Exchange Growth
            </h3>
            <div className="h-64 flex items-center justify-center">
              {/* Improved line chart visualization */}
              <div className="relative w-full h-full">
                {/* Axes */}
                <div className="absolute bottom-0 left-0 right-0 border-t border-gray-700 h-0"></div>
                <div className="absolute left-0 bottom-0 top-0 border-r border-gray-700 w-0"></div>

                {timeframe === "yearly" && (
                  <>
                    {/* Line chart for yearly data */}
                    <svg
                      className="absolute inset-0 w-full h-full"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      <polyline
                        points={impactData.yearlyData
                          .map((data, index) => {
                            const x =
                              (index / (impactData.yearlyData.length - 1)) *
                              100;
                            const maxDevices =
                              impactData.yearlyData[
                                impactData.yearlyData.length - 1
                              ].devices;
                            const y = 100 - (data.devices / maxDevices) * 100;
                            return `${x},${y}`;
                          })
                          .join(" ")}
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="2"
                      />

                      {/* Data points */}
                      {impactData.yearlyData.map((data, index) => {
                        const x =
                          (index / (impactData.yearlyData.length - 1)) * 100;
                        const maxDevices =
                          impactData.yearlyData[
                            impactData.yearlyData.length - 1
                          ].devices;
                        const y = 100 - (data.devices / maxDevices) * 100;
                        return (
                          <circle
                            key={index}
                            cx={`${x}`}
                            cy={`${y}`}
                            r="1.5"
                            fill="#3b82f6"
                          />
                        );
                      })}
                    </svg>

                    {/* X-axis labels */}
                    <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-400 pt-2">
                      {impactData.yearlyData.map((data, index) => (
                        <div key={index} className="text-center">
                          <div>{data.year}</div>
                          <div className="text-white">{data.devices}</div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {timeframe === "monthly" && (
                  <>
                    {/* Line chart for monthly data */}
                    <svg
                      className="absolute inset-0 w-full h-full"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      <polyline
                        points={impactData.monthlyData
                          .map((data, index) => {
                            const x =
                              (index / (impactData.monthlyData.length - 1)) *
                              100;
                            const maxDevices =
                              impactData.monthlyData[
                                impactData.monthlyData.length - 1
                              ].devices;
                            const y = 100 - (data.devices / maxDevices) * 90;
                            return `${x},${y}`;
                          })
                          .join(" ")}
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="2"
                      />

                      {/* Area under the line */}
                      <polygon
                        points={`0,100 ${impactData.monthlyData
                          .map((data, index) => {
                            const x =
                              (index / (impactData.monthlyData.length - 1)) *
                              100;
                            const maxDevices =
                              impactData.monthlyData[
                                impactData.monthlyData.length - 1
                              ].devices;
                            const y = 100 - (data.devices / maxDevices) * 90;
                            return `${x},${y}`;
                          })
                          .join(" ")} 100,100`}
                        fill="url(#blue-gradient)"
                        fillOpacity="0.2"
                      />

                      {/* Data points */}
                      {impactData.monthlyData.map((data, index) => {
                        const x =
                          (index / (impactData.monthlyData.length - 1)) * 100;
                        const maxDevices =
                          impactData.monthlyData[
                            impactData.monthlyData.length - 1
                          ].devices;
                        const y = 100 - (data.devices / maxDevices) * 90;
                        return (
                          <circle
                            key={index}
                            cx={`${x}`}
                            cy={`${y}`}
                            r="1.5"
                            fill="#3b82f6"
                          />
                        );
                      })}

                      {/* Gradient definition */}
                      <defs>
                        <linearGradient
                          id="blue-gradient"
                          x1="0%"
                          y1="0%"
                          x2="0%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            stopColor="#3b82f6"
                            stopOpacity="0.3"
                          />
                          <stop
                            offset="100%"
                            stopColor="#3b82f6"
                            stopOpacity="0.02"
                          />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* X-axis labels - display only every other month to avoid crowding */}
                    <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-400 pt-2">
                      {impactData.monthlyData
                        .filter((_, index) => index % 2 === 0)
                        .map((data, index) => {
                          const actualIndex = index * 2;
                          const position =
                            (actualIndex /
                              (impactData.monthlyData.length - 1)) *
                            100;
                          return (
                            <div
                              key={actualIndex}
                              style={{
                                position: "absolute",
                                left: `${position}%`,
                                transform: "translateX(-50%)",
                              }}
                            >
                              <div>{data.month}</div>
                              <div className="text-white">{data.devices}</div>
                            </div>
                          );
                        })}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Top Universities Chart */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <BarChart size={20} className="mr-2 text-green-400" />
              Top Contributing Universities
            </h3>
            <div className="h-64 flex flex-col justify-center space-y-4">
              {impactData.topUniversities.map((uni, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-24 text-sm text-gray-300 truncate mr-2">
                    {uni.name}
                  </div>
                  <div className="flex-1 h-6 bg-gray-700 rounded overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-green-600 to-blue-600 rounded"
                      style={{
                        width: `${
                          (uni.devicesExchanged /
                            impactData.topUniversities[0].devicesExchanged) *
                          100
                        }%`,
                      }}
                    ></div>
                  </div>
                  <div className="w-20 text-white text-sm ml-2 text-right">
                    {uni.devicesExchanged} devices
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Device Type Breakdown - IMPROVED PIE CHART */}
      <div className="container mx-auto px-4 mb-12">
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
            <PieChart size={20} className="mr-2 text-purple-400" />
            Device Type Breakdown
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-64 flex items-center justify-center">
              {/* Improved SVG pie chart */}
              <svg width="200" height="200" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="#1f2937"
                  stroke="#374151"
                  strokeWidth="1"
                />

                {/* Calculate and render pie slices based on actual percentages */}
                {(() => {
                  const slices = [];
                  let cumulativeAngle = 0;

                  // Colors for different device types
                  const colors = [
                    "#3b82f6",
                    "#10b981",
                    "#f59e0b",
                    "#8b5cf6",
                    "#ef4444",
                    "#6b7280",
                  ];

                  impactData.devicesByType.forEach((device, index) => {
                    const startAngle = cumulativeAngle;
                    const angleSize = (device.percentage / 100) * 360;
                    cumulativeAngle += angleSize;

                    // Calculate start and end points
                    const startRad = (startAngle - 90) * (Math.PI / 180);
                    const endRad =
                      (startAngle + angleSize - 90) * (Math.PI / 180);

                    const startX = 50 + 48 * Math.cos(startRad);
                    const startY = 50 + 48 * Math.sin(startRad);
                    const endX = 50 + 48 * Math.cos(endRad);
                    const endY = 50 + 48 * Math.sin(endRad);

                    // Determine if the arc is large (> 180 degrees)
                    const largeArcFlag = angleSize > 180 ? 1 : 0;

                    // Create path for the pie slice
                    const path = `M 50 50 L ${startX} ${startY} A 48 48 0 ${largeArcFlag} 1 ${endX} ${endY} Z`;

                    slices.push(
                      <path
                        key={index}
                        d={path}
                        fill={colors[index % colors.length]}
                        stroke="#1f2937"
                        strokeWidth="0.5"
                      />
                    );

                    // Add percentage labels if slice is big enough
                    if (device.percentage > 5) {
                      const labelRad =
                        startRad + (angleSize / 2) * (Math.PI / 180);
                      const labelX = 50 + 30 * Math.cos(labelRad);
                      const labelY = 50 + 30 * Math.sin(labelRad);

                      slices.push(
                        <text
                          key={`label-${index}`}
                          x={labelX}
                          y={labelY}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fill="white"
                          fontSize="4"
                          fontWeight="bold"
                        >
                          {device.percentage > 10
                            ? `${Math.round(device.percentage)}%`
                            : ""}
                        </text>
                      );
                    }
                  });

                  return slices;
                })()}

                {/* Center circle for aesthetic */}
                <circle
                  cx="50"
                  cy="50"
                  r="15"
                  fill="#1f2937"
                  stroke="#374151"
                  strokeWidth="0.5"
                />
              </svg>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {impactData.devicesByType.map((device, index) => (
                <div key={index} className="flex flex-col">
                  <div className="flex items-center mb-2">
                    <div
                      className={`w-3 h-3 rounded-full mr-2 ${
                        index === 0
                          ? "bg-blue-600"
                          : index === 1
                          ? "bg-green-600"
                          : index === 2
                          ? "bg-yellow-600"
                          : index === 3
                          ? "bg-purple-600"
                          : index === 4
                          ? "bg-red-600"
                          : "bg-gray-600"
                      }`}
                    ></div>
                    <span className="text-white">{device.type}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">
                      {device.count} devices
                    </span>
                    <span className="text-gray-300">{device.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Impact Comparisons */}
      <div className="container mx-auto px-4 mb-12">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">
          Environmental Impact in Perspective
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactData.impactComparisons.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-6 shadow-lg border border-gray-700 text-center"
            >
              <h4 className="text-lg font-semibold text-gray-300 mb-3">
                {item.metric}
              </h4>
              <p className="text-2xl font-bold text-white mb-3">{item.value}</p>
              <p className="text-gray-400">Equivalent to</p>
              <p className="text-gray-200 font-medium mt-1">
                {item.equivalent}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 pb-16">
        <div className="bg-gradient-to-r from-green-900 to-blue-900 rounded-lg p-8 shadow-lg text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl text-gray-200 mb-6 max-w-3xl mx-auto">
            Every device exchanged contributes to our collective environmental
            impact. Whether you're a student, faculty member, or university
            administrator, you can help reduce e-waste.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-green-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Exchange a Device
            </button>
            <button className="bg-transparent text-white border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Become a Partner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactDashboardPage;
