"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useCart } from "@/contexts/CartContext";
import IProduct from "@/interfaces/IProduct";
import { createOrder } from "@/services/orders.services";

const Cart = () => {
  const { isAuthenticated, token } = useAuth();
  const router = useRouter();
  const cart = useCart();
  if (!token) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="h1">Cart</h1>
      {isAuthenticated ? (
        cart.items.length > 0 ? (
        <div className="flex flex-col items-center">
          <h2 className="h2">Your cart:</h2>
          <section className="grid grid-cols-1 gap-3 bg-slate-600 p-4 rounded-2xl m-4">
            {cart.items.map((product: IProduct) => (
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
            <p className="mx-3 font-bold text-xl text-center">
              Total: ${cart.getTotalPrice()}
            </p>
          </section>
          <button
            className="formButton"
            onClick={() => {
              try {
                createOrder(token, cart.getIds());
                cart.clearCart();
                alert("Order completed successfully");
                router.push("/orders");
              } catch (error) {
                alert(`${error}`);
              }
            }}
          >
            Complete purchase!
          </button>
        </div>
        ) : (
          <p className="font-bold text-center">Your cart is empty. Click <button className="cursor-pointer" onClick={() => router.push("/")}>here</button> to go back to the store and start buying!</p>
        )
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
