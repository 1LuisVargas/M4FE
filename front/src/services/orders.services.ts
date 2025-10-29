import IOrder from "../interfaces/IOrder";

const getOrdersByUserId = async (userId: number) => {
    try {
        const data = await fetch(`http://localhost:3005/users/orders/${userId}`);
        const orders: IOrder[] = await data.json();
        return orders;
    } catch (error) {
        console.log(error);
    }
};

export default getOrdersByUserId;