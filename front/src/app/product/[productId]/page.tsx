import IProduct from "@/interfaces/IProduct";
import { getProductById } from "@/services/products.services";
import Image from "next/image";

interface ProductDetailsProps {
  params: { productId: string };
}

const ProductDetails = ({ params }: ProductDetailsProps) => {
  const { productId } = params;
  let product = {} as IProduct;
  
  try {
    product = getProductById(productId);
    
  } catch (error) {
    console.log(error);
  }

  //TODO: FINISH VIEWING THE 6TH CLASS

  return (
    <div className="flex items-center flex-col">
      <h1 className="h1">This is the product page for product:</h1>
      <p className="text-2xl">{product?.name}</p>
      <Image
        className="m-4"
        src={product?.image}
        alt={`Image of ${product?.name}`}
        width={200}
        height={200}
      />
      <p className="text-2xl">{product?.description}</p>
      <p className="text-2xl">{product?.price}</p>
    </div>
  );
};

export default ProductDetails;
