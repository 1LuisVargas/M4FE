import ProductCard from "@/components/ProductCard";
import IProduct from "@/interfaces/IProduct";
import { getAllProducts } from "@/services/products.services";

export default async function Home() {
  const products = await getAllProducts();

  return (
    <div>
      <h1 className="h1">Store page</h1>
      <h2 className="h2">Products</h2>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {products.map((product: IProduct) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
}
