import IProduct from "@/interfaces/IProduct";

export const getAllProducts = async () => {
    try {
        const data = await fetch("http://localhost:3005/products");
        const products: IProduct[] = await data.json();
        return products;
    } catch (error) {
        throw new Error("Failed to fetch products");
    }
}