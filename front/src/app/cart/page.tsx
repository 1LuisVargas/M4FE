import { RequireAuth } from "@/components/RequireAuth";

const cart = () => {
    return (
        <RequireAuth>
            <h1 className="h1">This is the cart page</h1>
        </RequireAuth>
    );
}

export default cart;