import IProduct from "@/interfaces/IProduct";

export default function ProductCard(product: IProduct) {
  return (
    <div>
        <h2>{product.name}</h2>
        <img src={product.image} alt="" />
        <p>{product.description}</p>
        <p>{product.price}</p>
      </div>
  );
}
