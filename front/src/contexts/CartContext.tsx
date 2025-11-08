"use client";

import IProduct from "@/interfaces/IProduct";
import { createContext, useEffect, useState, useContext } from "react";
import { useAuth } from "./AuthContext";
import { useRouter } from "next/navigation";

type CartContextType = {
  items: IProduct[];
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
  const [items, setItems] = useState<IProduct[]>(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem(CART_KEY);
      if (storedCart) {
        return JSON.parse(storedCart);
      }
    }
    return [];
  });
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const storedCart = localStorage.getItem(CART_KEY);
    if (storedCart) {
      setItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
  }, [items]);

  const addToCart = (product: IProduct) => {
    if (!isAuthenticated) {
      alert("Please login to add items to your cart");
      router.push("/login");
      return;
    }

    const existingProduct = items.find((item) => item.id === product.id);
    if (existingProduct) {
      alert(
        "Product already in cart. You can't have two of the same item in the cart."
      );
      return;
    }

    setItems((prev) => [...prev, product]);
  };

  const removeFromCart = (productId: number) => {
    setItems(items.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price, 0);
  };

  const getTotalQuantity = () => {
    return items.length;
  };

  const getIds = () => {
    return items.map((item) => item.id);
  };

  return (
    <CartContext.Provider
      value={{
        items,
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
