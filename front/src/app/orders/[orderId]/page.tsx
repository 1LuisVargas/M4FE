"use client";
import IOrder from "@/interfaces/IOrder";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";
import { getOrderById } from "@/services/orders.services";
import { notFound } from "next/navigation";

const OrderDetails = ({
  params: { orderId },
}: {
  params: { [orderId: string]: string };
}) => {
  const { token } = useAuth();
  const [order, setOrder] = useState<IOrder | null>(null);
  useEffect(() => {
    const fetchOrder = async () => {
      if (token) {
        const fetchedOrder = await getOrderById(parseInt(orderId), token);
        if (fetchedOrder) setOrder(fetchedOrder);
        else {
          alert("Order not found");
          notFound();
        }
      }
    };
    fetchOrder();
  }, [orderId, token]);

  if (!token) return <p>Loading...</p>;
  if (!order) return <p>Loading...</p>;

  return (
    <div className="flex flex-col items-center my-10">
      <h1 className="h1">Order details:</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 lg:items-center">
        <div className="flex flex-col lg:flex-row bg-slate-600 p-4 rounded-2xl m-2 items-center">
          <p className="mx-3 font-bold">Order number:</p>
          <p className="mx-3 font-bold">{order.id}</p>
        </div>
        <div className="flex flex-col lg:flex-row bg-slate-600 p-4 rounded-2xl m-2 items-center">
          <p className="mx-3 font-bold">Order date:</p>
          <p className="mx-3 font-bold">
            {order.date.toString().split("T")[0]}
          </p>
        </div>
        <div className="flex flex-col lg:flex-row bg-slate-600 p-4 rounded-2xl m-2 items-center">
          <p className="mx-3 font-bold">Order status:</p>
          <p className="mx-3 font-bold">{order.status}</p>
        </div>
        <div className="flex flex-col lg:flex-row bg-slate-600 p-4 rounded-2xl m-2 items-center">
            <p className="mx-3 font-bold">Products ordered:</p>
            <p className="mx-3 font-bold">{order.products.length}</p>
        </div>
        <div className="flex flex-col lg:flex-row bg-slate-600 p-4 rounded-2xl m-2 items-center">
            <p className="mx-3 font-bold">Total price:</p>
            <p className="mx-3 font-bold">
              {order.products.reduce(
                (order, product) => order + product.price,
                0
              )}
              $
            </p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
