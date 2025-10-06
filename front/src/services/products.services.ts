import IProduct from "@/interfaces/IProduct";

export const getAllProducts = async () => {
  try {
    const data = await fetch("http://localhost:3005/products");
    const products: IProduct[] = await data.json();
    return products;
  } catch (error) {
    throw new Error(`Error fetching products: ${error}`);
  }
};

export const getProductById = async (id: string) => {
  try {
    const products = await getAllProducts();
    return products.find((product: IProduct) => product.id === parseInt(id));
  } catch (error) {
    throw new Error(`Error fetching the requested product: ${error}`);
  }
};
