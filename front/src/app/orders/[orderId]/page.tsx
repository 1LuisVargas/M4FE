import IOrder from "@/interfaces/IOrder";
import { getOrderById } from "@/services/orders.services";

const OrderDetails = async ({ params }: { params: { [orderId: string]: string }; }) => {
    const { orderId } = params;
    let order: IOrder | undefined;

    try {
        order = await getOrderById(parseInt(orderId), "token");
        if (!order) {
            throw new Error("Order not found");
        }
        return (
            <div>
                <h1 className="h1">Order details:</h1>
                <p className="text-xl"><span className="font-bold">Order id:</span> {order.id}</p>
                <p className="text-xl"><span className="font-bold">Order date:</span> {order.date.toString().split("T")[0]}</p>
                <p className="text-xl"><span className="font-bold">Order status:</span> {order.status}</p>
                <p className="text-xl"><span className="font-bold">Order total:</span> ${order.products.reduce((total, product) => total + product.price, 0)}</p>
            </div>
        );
    } catch (error) {
        alert(`Order not found ${error}`);
    }
};

export default OrderDetails;