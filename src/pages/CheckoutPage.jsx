"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CreditCard, Check } from "lucide-react";
import { useCart } from "../context/CartContext";

const CheckoutPage = () => {
  const {
    cart,
    getCartTotal,
    clearCart,
    getPlatformFees,
    getUniversityFees,
    getEnvironmentalImpact,
  } = useCart();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    universityEmail: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    university: "",
    pickupLocation: "",
    pickupPreference: "self",
    cardName: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvv: "",
  });
  const [step, setStep] = useState(1);
  const [orderComplete, setOrderComplete] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (step === 1) {
      setStep(2);
      window.scrollTo(0, 0);
    } else {
      // In a real app, you would process the payment here
      // For this template, we'll just simulate a successful order
      setOrderComplete(true);
      clearCart();
      window.scrollTo(0, 0);
    }
  };

  const subtotal = getCartTotal();
  const platformFees = getPlatformFees();
  const universityFees = getUniversityFees();
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  // Environmental impact
  const impact = getEnvironmentalImpact();

  // Get unique list of universities in cart
  const universitiesInCart = new Set();
  cart.forEach((item) => {
    if (item.university) universitiesInCart.add(item.university);
  });

  if (orderComplete) {
    return (
      <div className="bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-md mx-auto text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={32} className="text-green-600" />
            </div>
            <h1 className="text-2xl font-bold mb-4">Device Reserved!</h1>
            <p className="text-gray-600 mb-4">
              Thank you for your reservation. Your order has been received and
              is being processed. You will receive an email notification when
              your device is ready for pickup at your selected university
              location.
            </p>

            {/* Environmental Impact */}
            <div className="bg-green-50 rounded-lg p-4 mb-6 text-left">
              <h2 className="font-semibold text-center mb-2">
                Your Environmental Impact
              </h2>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">CO₂ Emissions Saved:</span>
                <span className="font-medium text-green-700">
                  {impact.carbonSaved}kg
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">E-Waste Reduced:</span>
                <span className="font-medium text-green-700">
                  {impact.wasteReduced}kg
                </span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="font-semibold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Order Number:</span>
                <span className="font-medium">
                  #ECO-{Math.floor(100000 + Math.random() * 900000)}
                </span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Total Amount:</span>
                <span className="font-medium">${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-gray-600">Pickup Location:</span>
                <span className="font-medium">
                  {formData.pickupLocation || "University Tech Center"}
                </span>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  You'll receive an email at {formData.universityEmail} with
                  pickup instructions.
                </p>
              </div>
            </div>
            <Link
              to="/products"
              className="bg-primary text-white px-6 py-3 rounded-md font-medium inline-flex items-center hover:bg-primary/90 transition-colors"
            >
              Browse More Devices
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Link
            to="/cart"
            className="text-gray-600 hover:text-primary flex items-center"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Cart
          </Link>
          <h1 className="text-2xl font-bold ml-auto">Checkout</h1>
          <div className="ml-auto">
            <div className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= 1
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                1
              </div>
              <div
                className={`w-12 h-1 ${
                  step >= 2 ? "bg-primary" : "bg-gray-200"
                }`}
              ></div>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= 2
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                2
              </div>
            </div>
            <div className="flex text-xs mt-1">
              <span className="w-8 text-center">Info</span>
              <span className="w-12"></span>
              <span className="w-8 text-center">Payment</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form */}
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit}>
              {step === 1 ? (
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h2 className="text-xl font-semibold mb-6">
                    Your Information
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-gray-700 mb-1"
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-gray-700 mb-1"
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="universityEmail"
                      className="block text-gray-700 mb-1"
                    >
                      University Email Address *
                    </label>
                    <input
                      type="email"
                      id="universityEmail"
                      name="universityEmail"
                      value={formData.universityEmail}
                      onChange={handleChange}
                      required
                      placeholder="you@university.edu"
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Your university email is required to verify your
                      affiliation.
                    </p>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="university"
                      className="block text-gray-700 mb-1"
                    >
                      Your University *
                    </label>
                    <select
                      id="university"
                      name="university"
                      value={formData.university}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select your university</option>
                      <option value="UC Berkeley">UC Berkeley</option>
                      <option value="Stanford">Stanford University</option>
                      <option value="MIT">MIT</option>
                      <option value="UCLA">UCLA</option>
                      <option value="Harvard">Harvard University</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="pickupLocation"
                      className="block text-gray-700 mb-1"
                    >
                      Pickup Location *
                    </label>
                    <select
                      id="pickupLocation"
                      name="pickupLocation"
                      value={formData.pickupLocation}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select a pickup location</option>
                      <option value="University Tech Center">
                        University Tech Center - Main Campus
                      </option>
                      <option value="University Library">
                        University Library - West Wing
                      </option>
                      <option value="Student Union">
                        Student Union Building
                      </option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 mb-1">
                      Pickup Preference *
                    </label>
                    <div className="flex flex-col gap-2 mt-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="pickupPreference"
                          value="self"
                          checked={formData.pickupPreference === "self"}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        I'll pick up the device myself
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="pickupPreference"
                          value="courier"
                          checked={formData.pickupPreference === "courier"}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        Campus courier delivery (additional $5 fee)
                      </label>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <h3 className="font-medium text-blue-800 mb-2">
                      Important Note
                    </h3>
                    <p className="text-sm text-blue-700">
                      Your identity and university affiliation will be verified
                      at pickup. Please bring your university ID card when
                      collecting your device.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 px-6 rounded-md font-medium hover:bg-primary/90 transition-colors"
                  >
                    Continue to Payment
                  </button>
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h2 className="text-xl font-semibold mb-6">
                    Payment Information
                  </h2>

                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      <CreditCard size={24} className="text-gray-600 mr-2" />
                      <h3 className="font-medium">Credit Card</h3>
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="cardName"
                        className="block text-gray-700 mb-1"
                      >
                        Name on Card *
                      </label>
                      <input
                        type="text"
                        id="cardName"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="cardNumber"
                        className="block text-gray-700 mb-1"
                      >
                        Card Number *
                      </label>
                      <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        required
                        placeholder="XXXX XXXX XXXX XXXX"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label
                          htmlFor="expMonth"
                          className="block text-gray-700 mb-1"
                        >
                          Month *
                        </label>
                        <select
                          id="expMonth"
                          name="expMonth"
                          value={formData.expMonth}
                          onChange={handleChange}
                          required
                          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="">MM</option>
                          {[...Array(12)].map((_, i) => (
                            <option key={i} value={i + 1}>
                              {String(i + 1).padStart(2, "0")}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="expYear"
                          className="block text-gray-700 mb-1"
                        >
                          Year *
                        </label>
                        <select
                          id="expYear"
                          name="expYear"
                          value={formData.expYear}
                          onChange={handleChange}
                          required
                          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="">YYYY</option>
                          {[...Array(10)].map((_, i) => {
                            const year = new Date().getFullYear() + i;
                            return (
                              <option key={year} value={year}>
                                {year}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="cvv"
                          className="block text-gray-700 mb-1"
                        >
                          CVV *
                        </label>
                        <input
                          type="text"
                          id="cvv"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleChange}
                          required
                          placeholder="XXX"
                          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4 mb-6">
                    <h3 className="font-medium text-green-800 mb-2">
                      Environmental Impact
                    </h3>
                    <div className="flex justify-between mb-1 text-sm">
                      <span>CO₂ Emissions Saved:</span>
                      <span className="font-medium">
                        {impact.carbonSaved}kg
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>E-Waste Reduced:</span>
                      <span className="font-medium">
                        {impact.wasteReduced}kg
                      </span>
                    </div>
                  </div>

                  <div className="mb-6 bg-gray-50 rounded-lg p-4">
                    <h3 className="font-medium mb-2">Fee Distribution</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      When you purchase a device through our platform:
                    </p>
                    <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                      <li>5% goes to platform maintenance and development</li>
                      <li>10% supports university e-waste programs</li>
                      <li>The remaining 85% goes to the device seller</li>
                    </ul>
                  </div>

                  <div className="flex items-center mb-6">
                    <input
                      type="checkbox"
                      id="terms"
                      className="mr-2"
                      required
                    />
                    <label htmlFor="terms" className="text-gray-700 text-sm">
                      I agree to the{" "}
                      <Link
                        to="/terms"
                        className="text-primary hover:underline"
                      >
                        Terms and Conditions
                      </Link>{" "}
                      and acknowledge that I am purchasing a used device that
                      has been verified but comes with limited warranty.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 px-6 rounded-md font-medium hover:bg-primary/90 transition-colors"
                  >
                    Complete Reservation
                  </button>
                </div>
              )}
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-20">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

              <div className="max-h-80 overflow-y-auto mb-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex py-3 border-b border-gray-100"
                  >
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md mr-4"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800">{item.name}</h3>
                      <p className="text-sm text-gray-500">
                        {item.university || "University"} •{" "}
                        {item.condition || "Used"}
                      </p>
                      <p className="text-sm text-gray-500">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Universities in Cart */}
              {Array.from(universitiesInCart).length > 0 && (
                <div className="mb-4 bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Device Source:</strong>{" "}
                    {Array.from(universitiesInCart).join(", ")}
                  </p>
                </div>
              )}

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Platform Fee (5%)</span>
                  <span className="font-medium">
                    ${platformFees.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">University Fee (10%)</span>
                  <span className="font-medium">
                    ${universityFees.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>

                {formData.pickupPreference === "courier" && (
                  <div className="flex justify-between text-gray-600">
                    <span>Campus Delivery Fee</span>
                    <span className="font-medium">$5.00</span>
                  </div>
                )}

                <div className="border-t border-gray-200 pt-3 mt-3">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>
                      $
                      {(
                        total +
                        (formData.pickupPreference === "courier" ? 5 : 0)
                      ).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-sm text-gray-500">
                <p className="mb-2">Pickup Information:</p>
                <div className="bg-gray-100 p-3 rounded">
                  <p>
                    You'll need to present your university ID when picking up
                    your device from the selected location. You'll receive an
                    email notification when your device is ready.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
