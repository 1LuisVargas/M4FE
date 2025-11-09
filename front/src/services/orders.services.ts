import IOrder from "../interfaces/IOrder";

export const getOrdersByUserId = async (token: string) => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/orders/`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
      "ngrok-skip-browser-warning": "1",
    },
  });
  if (!data.ok) {
    throw new Error(`Orders ${data.statusText}`);
  }
  const orders: IOrder[] = await data.json();
  return orders;
};

export const createOrder = async (token: string, products: number[]) => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
      "ngrok-skip-browser-warning": "1",
    },
    body: JSON.stringify({ products }),
  });

  if (!data.ok) {
    throw new Error(`${data.statusText}`);
  }
  const order: IOrder = await data.json();
  return order;
};

export const getOrderById = async (orderId: number, token: string) => {
  const orders = await getOrdersByUserId(token);
  const order = orders.find((order: IOrder) => order.id === orderId);
  return order;
};
