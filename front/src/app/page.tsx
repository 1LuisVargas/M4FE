import ProductCard from "@/components/ProductCard";
import products from "@/helpers/mockProducts";
import IProduct from "@/interfaces/IProduct";

export default function Home() {
  return (
    <div>
      <h1>Store page</h1>
      <h2>Products</h2>
      <section>
        {products.map((product: IProduct) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
}
