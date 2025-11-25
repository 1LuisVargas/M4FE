"use client";

import { useAuth } from "@/contexts/AuthContext";
import { getOrderById } from "@/services/orders.services";

const ViewOrderDetails = ( orderId : string) => {
    const { token } = useAuth();
    if (!token) return null;

    getOrderById(parseInt(orderId), token).then((fetchedOrder) => {
        if (fetchedOrder) {
            return fetchedOrder;
        } else {
            alert("Order not found");
        }
    });

    return null;
}

export default ViewOrderDetails;