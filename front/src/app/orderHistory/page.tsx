import { RequireAuth } from "@/components/RequireAuth";

const orderHistory = () => {
  return (
    <RequireAuth>
      <h1 className="h1">Order History:</h1>
    </RequireAuth>
  );
};
export default orderHistory;
