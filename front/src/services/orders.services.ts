import IOrder from "../interfaces/IOrder";

const getOrdersByUserId = async (userId: number) => {
  const data = await fetch(`http://localhost:3005/users/orders/${userId}`);
  if (!data.ok) {
    throw new Error(`Error fetching orders: ${data.statusText}`);
  }  
  const orders: IOrder[] = await data.json();
  return orders;
};

export default getOrdersByUserId;
