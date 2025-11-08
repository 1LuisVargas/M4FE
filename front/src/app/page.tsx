import ProductCard from "@/components/ProductCard";
import IProduct from "@/interfaces/IProduct";
import { getAllProducts } from "@/services/products.services";

export default async function Home() {
  let products: IProduct[] = [];

  try {
    products = await getAllProducts();
  } catch (error) {
    console.log(error);
    return (
      <div>
        <h1 className="h1">Store page</h1>
        <h2 className="h2">Failed to get the products</h2>
      </div>
    );
  }

  return (
    <div>
      <h1 className="h1">Store page</h1>
      <h2 className="h2">Products</h2>
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {products.map((product: IProduct) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
}
