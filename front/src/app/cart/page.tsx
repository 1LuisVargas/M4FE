"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

const Cart = () => {
    const { isAuthenticated } = useAuth();
    const router = useRouter();

    return (
        <div>
            <h1>Cart</h1>
            {isAuthenticated ? (
                <p>Cart content</p>
            ) : (
                <p>Please <button onClick={() => router.push("/login")} className="font-bold">login</button> to see your cart</p>
            )}
        </div>
    )
}

export default Cart;