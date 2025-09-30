import IProduct from "@/interfaces/IProduct";
import Image from "next/image";

interface IProductCardProps {
    product: IProduct;
}

export default function ProductCard({product}: IProductCardProps) {
  return (
    <div>
        <h2>{product.name}</h2>
        <Image src={product.image} alt={`Image of ${product.name}`} width={300} height={300} />
        <p>{product.description}</p>
        <p>{product.price}</p>
      </div>
  );
}
