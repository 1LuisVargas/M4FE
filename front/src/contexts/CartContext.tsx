'use client';

import IProduct from "@/interfaces/IProduct";
import { createContext, useEffect, useState } from "react";

type CartContextType = {
    cart: IProduct[], 
    addToCart: (product: IProduct) => void,
    removeFromCart: (product: IProduct) => void,
    clearCart: () => void,
    getTotalPrice: () => number,
    getTotalQuantity: () => number,
    getIds: () => number[] // Necessary for the backend, since when creating the order, it only uses the ids
}

const CART_KEY = 'cart';

export const CartContext = createContext<CartContextType | null>(null);

export const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<IProduct[]>([]);

    useEffect(() => {
        const storedCart = localStorage.getItem(CART_KEY);
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(CART_KEY, JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={null}>
            {children}
        </CartContext.Provider>
    );
};