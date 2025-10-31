"use client";
import { useAuth } from "@/contexts/AuthContext";

const OrderHistory = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      <h1>Order History</h1>
      {isAuthenticated ? (
        <p>Order history content</p>
      ) : (
        <p>Please <button className="font-bold">login</button> to see your order history</p>
      )}
    </div>
  );
};
export default OrderHistory;