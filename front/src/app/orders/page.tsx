"use client";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { getOrdersByUserId } from "@/services/orders.services";
import IOrder from "@/interfaces/IOrder";
import { useEffect, useState } from "react";

const OrderHistory = () => {
  const { isAuthenticated, token } = useAuth();
  const router = useRouter();

  const [orders, setOrders] = useState<IOrder[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      if (isAuthenticated && token) {
        try {
          const orders = await getOrdersByUserId(token);
          setOrders(orders);
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchOrders();
  }, [isAuthenticated, token]);

  if (!isAuthenticated) return null;
  if (!token) return <p>Loading...</p>;

  return (
    <div className="flex flex-col items-center my-10">
      <h1 className="h1">Order history:</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 lg:items-center">
        {orders.map((order: IOrder) => (
          <div
            className="flex flex-col lg:flex-row bg-slate-600 p-4 rounded-2xl m-2 items-center"
            key={order.id}
          >
            <p className="mx-3 font-bold">Order: {order.id}</p>
            <p className="mx-3 font-bold">{order.status.toUpperCase()}</p>
            <p className="mx-3 font-bold">
              {order.date.toString().split("T")[0]}
            </p>
            <p className="mx-3 font-bold">
              Products ordered: {order.products.length}
            </p>
            <p className="mx-3 font-bold">
              Total price:{" "}
              {order.products.reduce(
                (order, product) => order + product.price,
                0
              )}
              $
            </p>
            <button
              className="formButton"
              onClick={() => router.push(`/orders/${order.id}`)}
            >
              View details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;
