import IProduct from "@/interfaces/IProduct";

export const getAllProducts = async () => { 
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
  if (!data.ok) {
    throw new Error(`Error fetching products: ${data.statusText}`);
  }
  const products: IProduct[] = await data.json();
  return products;
};

export const getProductById = async (id: string) => {
  const products = await getAllProducts();
  const product = products.find((product) => product.id === parseInt(id))
  if (!product) throw new Error("Product not found");
  return product;
};
