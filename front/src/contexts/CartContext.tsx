"use client";

import IProduct from "@/interfaces/IProduct";
import { createContext, useEffect, useState, useContext } from "react";
import { useAuth } from "./AuthContext";
import { useRouter } from "next/navigation";

type CartContextType = {
  cart: IProduct[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalQuantity: () => number;
  getIds: () => number[]; // Necessary for the backend, since when creating the order, it only uses the ids
};

const CART_KEY = "cart";

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cart, setCart] = useState<IProduct[]>([]);
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const storedCart = localStorage.getItem(CART_KEY);
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: IProduct) => {
    if (!isAuthenticated) {
      alert("Please login to add items to your cart");
      router.push("/login");
      return;
    }

    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      alert(
        "Product already in cart. You can't have two of the same item in the cart."
      );
      return;
    }

    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (productId: number) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const getTotalQuantity = () => {
    return cart.length;
  };

  const getIds = () => {
    return cart.map((item) => item.id);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalPrice,
        getTotalQuantity,
        getIds,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartContextProvider");
  }
  return context;
}
