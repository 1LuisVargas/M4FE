import ProductCard from "@/components/ProductCard";
import products from "@/helpers/mockProducts";
import IProduct from "@/interfaces/IProduct";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl text-center m-4">Store page</h1>
      <h2 className="text-2xl text-center m-3">Products</h2>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {products.map((product: IProduct) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
}
