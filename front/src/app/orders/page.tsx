"use client";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { getOrdersByUserId } from "@/services/orders.services";
import IOrder from "@/interfaces/IOrder";
import { useEffect, useState } from "react";

const OrderHistory = () => {
  const { isAuthenticated, token} = useAuth();
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
    <div className="flex flex-col items-center bg-slate-600 p-4 rounded-2xl m-4 w-1/2 mx-auto">
      <h1 className="h1">Order history:</h1>
      {orders.map((order: IOrder) => (
        <div className="flex flex-row items-center bg-blue-400 m-1 p-2 rounded-2xl" key={order.id}>
          <p className="mx-3 font-bold">{order.status.toUpperCase()}</p>
          <p className="mx-3 font-bold">{order.date.toString().split("T")[0]}</p>
          <button
            className="mx-3 font-bold"
            onClick={() => router.push(`/orders/${order.id}`)}
          >
            View details
          </button>
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;