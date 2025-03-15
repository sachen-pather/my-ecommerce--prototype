"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart, getCartTotal } = useCart();
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponDiscount, setCouponDiscount] = useState(0);

  const handleQuantityChange = (productId, newQuantity) => {
    updateQuantity(productId, Number.parseInt(newQuantity));
  };

  const handleRemoveItem = (productId) => {
    removeFromCart(productId);
  };

  const handleApplyCoupon = () => {
    if (couponCode.toUpperCase() === "SUMMER20") {
      setCouponApplied(true);
      setCouponDiscount(getCartTotal() * 0.2);
    } else {
      alert("Invalid coupon code");
    }
  };

  const subtotal = getCartTotal();
  const shippingCost = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shippingCost - couponDiscount;

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">
          Your Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full mb-4">
              <ShoppingBag size={32} className="text-gray-400" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-gray-400 mb-6">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Link
              to="/products"
              className="bg-primary text-white px-6 py-3 rounded-md font-medium inline-flex items-center hover:bg-primary/90 transition-colors"
            >
              Start Shopping
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <div className="bg-gray-800 rounded-lg shadow-sm border border-gray-700 overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-700 text-gray-300">
                    <tr>
                      <th className="text-left py-4 px-6">Product</th>
                      <th className="text-center py-4 px-2">Quantity</th>
                      <th className="text-right py-4 px-6">Price</th>
                      <th className="text-right py-4 px-6">Total</th>
                      <th className="py-4 px-2"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {cart.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-700">
                        <td className="py-4 px-6">
                          <div className="flex items-center">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded-md mr-4"
                            />
                            <div>
                              <h3 className="font-medium text-gray-100">
                                {item.name}
                              </h3>
                              {item.selectedColor && (
                                <p className="text-sm text-gray-400">
                                  Color: {item.selectedColor}
                                </p>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-2">
                          <div className="flex items-center justify-center">
                            <button
                              onClick={() =>
                                handleQuantityChange(item.id, item.quantity - 1)
                              }
                              className="w-8 h-8 border border-gray-600 rounded-l-md flex items-center justify-center text-gray-300 hover:bg-gray-700"
                            >
                              -
                            </button>
                            <input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) =>
                                handleQuantityChange(item.id, e.target.value)
                              }
                              className="w-12 h-8 border-t border-b border-gray-600 text-center bg-gray-800 text-gray-100"
                            />
                            <button
                              onClick={() =>
                                handleQuantityChange(item.id, item.quantity + 1)
                              }
                              className="w-8 h-8 border border-gray-600 rounded-r-md flex items-center justify-center text-gray-300 hover:bg-gray-700"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-right">
                          ${item.price.toFixed(2)}
                        </td>
                        <td className="py-4 px-6 text-right font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </td>
                        <td className="py-4 px-2 text-right">
                          <button
                            onClick={() => handleRemoveItem(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={18} />
                            <span className="sr-only">Remove item</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 flex justify-between items-center">
                <Link
                  to="/products"
                  className="text-primary hover:underline flex items-center"
                >
                  <ArrowRight size={18} className="mr-2 rotate-180" />
                  Continue Shopping
                </Link>

                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="border border-gray-600 rounded-l-md px-4 py-2 bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <button
                    onClick={handleApplyCoupon}
                    className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary/90 transition-colors"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="bg-gray-800 rounded-lg shadow-sm border border-gray-700 p-6">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-400">Shipping</span>
                    <span className="font-medium">
                      {shippingCost === 0
                        ? "Free"
                        : `$${shippingCost.toFixed(2)}`}
                    </span>
                  </div>

                  {couponApplied && (
                    <div className="flex justify-between text-green-500">
                      <span>Discount (SUMMER20)</span>
                      <span>-${couponDiscount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="border-t border-gray-700 pt-3 mt-3">
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <Link
                  to="/checkout"
                  className="w-full bg-primary text-white py-3 px-6 rounded-md font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                >
                  Proceed to Checkout
                  <ArrowRight size={18} />
                </Link>

                <div className="mt-6 text-sm text-gray-400">
                  <p className="mb-2">We accept:</p>
                  <div className="flex space-x-2">
                    <div className="w-10 h-6 bg-gray-700 rounded"></div>
                    <div className="w-10 h-6 bg-gray-700 rounded"></div>
                    <div className="w-10 h-6 bg-gray-700 rounded"></div>
                    <div className="w-10 h-6 bg-gray-700 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
