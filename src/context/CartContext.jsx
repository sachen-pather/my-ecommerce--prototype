"use client";

import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Load cart from localStorage on initial render
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Add environmental impact tracking
  const [environmentalImpact, setEnvironmentalImpact] = useState({
    carbonSaved: 0,
    wasteReduced: 0,
  });

  // Calculate environmental impact whenever cart changes
  useEffect(() => {
    const carbonSaved = cart.reduce(
      (total, item) =>
        total + (item.environmentalImpact?.carbonSaved || 0) * item.quantity,
      0
    );

    const wasteReduced = cart.reduce(
      (total, item) =>
        total + (item.environmentalImpact?.wasteReduced || 0) * item.quantity,
      0
    );

    setEnvironmentalImpact({
      carbonSaved,
      wasteReduced,
    });
  }, [cart]);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add item to cart with university and platform fees
  const addToCart = (product, quantity = 1) => {
    // Calculate platform fee (5%)
    const platformFee = product.price * 0.05;

    // Calculate university handling fee (10%)
    const universityFee = product.price * 0.1;

    // Calculate amount for the seller
    const sellerAmount = product.price - platformFee - universityFee;

    // Product with fees included
    const productWithFees = {
      ...product,
      platformFee,
      universityFee,
      sellerAmount,
      quantity,
    };

    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (item) => item.id === product.id
      );

      if (existingItemIndex >= 0) {
        // Item already exists in cart, update quantity
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + quantity,
        };
        return updatedCart;
      } else {
        // Item doesn't exist in cart, add it
        return [...prevCart, productWithFees];
      }
    });
  };

  // Update item quantity
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  // Calculate cart subtotal
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Calculate total platform fees
  const getPlatformFees = () => {
    return cart.reduce(
      (total, item) => total + (item.platformFee || 0) * item.quantity,
      0
    );
  };

  // Calculate total university fees
  const getUniversityFees = () => {
    return cart.reduce(
      (total, item) => total + (item.universityFee || 0) * item.quantity,
      0
    );
  };

  // Calculate total number of items in cart
  const getCartItemsCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Get list of unique universities in cart
  const getUniversitiesInCart = () => {
    const universities = new Set();
    cart.forEach((item) => {
      if (item.university) universities.add(item.university);
    });
    return Array.from(universities);
  };

  // Get environmental impact
  const getEnvironmentalImpact = () => {
    return environmentalImpact;
  };

  // Context value
  const value = {
    cart,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    getCartTotal,
    getCartItemsCount,
    getPlatformFees,
    getUniversityFees,
    environmentalImpact,
    getEnvironmentalImpact,
    getUniversitiesInCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
