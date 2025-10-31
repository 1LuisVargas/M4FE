import IProduct from "@/interfaces/IProduct";
import Image from "next/image";
import AddToCart from "./AddToCart";
import ViewDetails from "./ViewDetails";

export default function ProductCard({ product }: { product: IProduct }) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-center text-xl">{product.name}</h2>
      <Image
        className="m-4"
        src={product.image}
        alt={`Image of ${product.name}`}
        width={300}
        height={300}
      />
      <p className="text-s text-center">{product.description}</p>
      <p className="p-3 text-s text-center">{product.price}</p>
      <div>
      <ViewDetails product={product}></ViewDetails>
      <AddToCart product={product}></AddToCart>
      </div>
    </div>
  );
}
