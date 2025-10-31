"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useCart } from "@/contexts/CartContext";
import IProduct from "@/interfaces/IProduct";

const Cart = () => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const cart = useCart();

  return (
    <div>
      <h1 className="h1">Cart</h1>
      {isAuthenticated ? (
        <div className="flex flex-col items-center">
          <h2 className="h2">Your cart:</h2>
          <section className="grid grid-cols-1 gap-3 bg-slate-600 p-4 rounded-2xl m-4">
            {cart.cart.map((product: IProduct) => (
              <div className="grid grid-cols-3 items-center" key={product.id}>
                <p className="mx-3 font-bold">{product.name}</p>
                <p className="mx-3 font-bold">${product.price}</p>
                <button
                  className="mx-3 font-bold removeButton"
                  onClick={() => cart.removeFromCart(product.id)}
                >
                  Remove
                </button>
              </div>
            ))}
            <p className="mx-3 font-bold text-xl">
              Total: ${cart.getTotalPrice()}
            </p>
          </section>
          <button
            className="formButton"
            onClick={() => router.push("/checkout")}
          >
            Checkout
          </button>
        </div>
      ) : (
        <p>
          Please{" "}
          <button onClick={() => router.push("/login")} className="font-bold">
            login
          </button>{" "}
          to see your cart
        </p>
      )}
    </div>
  );
};

export default Cart;
