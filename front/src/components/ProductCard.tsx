import IProduct from "@/interfaces/IProduct";
import Image from "next/image";
import AddToCart from "./AddToCart";
import ViewDetails from "./ViewProductDetails";

export default function ProductCard({ product }: { product: IProduct }) {
  return (
    <div className="flex flex-col items-center">
      <h3 className="h3">{product.name}</h3>
      <Image
        className="p-4"
        src={product.image}
        alt={`Image of ${product.name}`}
        width={300}
        height={300}
      />
      <p className="m-3 text-s text-center">{product.description}</p>
      <p className="p-3 font-bold text-s text-center">{product.price}$</p>
      <div>
      <ViewDetails product={product}></ViewDetails>
      <AddToCart product={product}></AddToCart>
      </div>
    </div>
  );
}
