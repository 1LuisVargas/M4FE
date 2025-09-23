import IProduct from "@/interfaces/IProduct";

interface IProductCardProps {
    product: IProduct;
}

export default function ProductCard({product}: IProductCardProps) {
  return (
    <div>
        <h2>{product.name}</h2>
        <img src={product.image} alt={`Image of ${product.name}`} />
        <p>{product.description}</p>
        <p>{product.price}</p>
      </div>
  );
}
