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
      <h1 className="h1">Order History</h1>
      {isAuthenticated ? (
        <div>
          {orders.length > 0 ? (
            orders.map((order: IOrder) => (
              <div key={order.id}>
                <p>Order ID: {order.id}</p>
                <p>Order Date: {order.date.toDateString()}</p>
                <p>
                  Order Total:{" "}
                  {order.products.reduce(
                    (total, product) => total + product.price,
                    0
                  )}
                </p>
              </div>
            ))
          ) : (
            <div className="flex flex-col text-center">
              <h2 className="h2">No orders found</h2>
              <p>
                Click{" "}
                <button className="font-bold" onClick={() => router.push("/")}>
                  here
                </button>{" "}
                to go back to the store and <span className="font-bold">keep on purchasing!</span>
              </p>
            </div>
          )}
        </div>
      ) : (
        <p>
          Please{" "}
          <button className="font-bold" onClick={() => router.push("/login")}>
            login
          </button>{" "}
          to see your order history
        </p>
      )}
    </div>
  );
};
export default OrderHistory;
