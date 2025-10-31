"use client";

import { useCart } from "@/contexts/CartContext";
import IProduct from "@/interfaces/IProduct";

export default function AddToCart({ product }: { product: IProduct }) {
  const cart = useCart();
  return (
    <button className="formButton" onClick={() => cart.addToCart(product)}>
      Add to cart
    </button>
  );
}
