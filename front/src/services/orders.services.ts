import IOrder from "../interfaces/IOrder";

export const getOrdersByUserId = async (userId: number) => {
  const data = await fetch(`http://localhost:3005/users/orders/${userId}`);
  if (!data.ok) {
    throw new Error(`Orders ${data.statusText}`);
  }
  const orders: IOrder[] = await data.json();
  return orders;
};

export const createOrder = async (token: string, products: number[]) => {
  const data = await fetch("http://localhost:3005/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({ products }),
  }) 

  if (!data.ok) {
    throw new Error(`${data.statusText}`);
  }
  const order: IOrder = await data.json();
  return order;
}