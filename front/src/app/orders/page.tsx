"use client";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import getOrdersByUserId from "@/services/orders.services";
import IOrder from "@/interfaces/IOrder";

const OrderHistory = () => {
  const { isAuthenticated, user } = useAuth();
  const router = useRouter();

  if (!isAuthenticated) return null;
  if (!user) return <p>Loading...</p>;
  let orders: IOrder[] = [];

  const fetchOrders = async () => {
    try {
      orders = await getOrdersByUserId(user.id);
    } catch (error) {
      alert(`${error}`);
      return;
    }
  };

  fetchOrders();

  return (
    <div>
      {orders.length > 0 ? (
        <div className="flex flex-col text-center">
          <h2 className="h2">Order History</h2>
          <p>
            Click{" "}
            <button className="font-bold" onClick={() => router.push("/")}>
              here
            </button>{" "}
            to go back to the store and{" "}
            <span className="font-bold">keep on purchasing!</span>
          </p>
        </div>
      ) : (
        <div className="flex flex-col text-center">
          <h2 className="h2">No orders found</h2>
          <p>
            Click{" "}
            <button className="font-bold cursor-pointer" onClick={() => router.push("/")}>
              here
            </button>{" "}
            to go back to the store and{" "}
            <span className="font-bold">keep on purchasing!</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
