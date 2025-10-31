import IProduct from "@/interfaces/IProduct";
import { getProductById } from "@/services/products.services";
import Image from "next/image";
import AddToCart from "@/components/AddToCart";

const ProductDetails = async ({
  params,
}: {
  params: { [productId: string]: string }; // Defining the type of params
}) => {
  const { productId } = params;
  let product: IProduct;

  try {
    product = await getProductById(productId);
    return (
      <div className="flex items-center flex-col">
        <h1 className="h1">This is the product page for product:</h1>
        <p className="h2">{product.name}</p>
        <Image
          className="m-4"
          src={product.image}
          alt={`Image of ${product.name}`}
          width={200}
          height={200}
        />
        <p className="text-2xl">{product.description}</p>
        <p className="text-2xl">{product.price}</p>
        <AddToCart product={product}></AddToCart>
      </div>
    );
  } catch (error) { //TODO: This not working as intended. Pending further review
    alert(error);
    console.log(error);
  }
};

export default ProductDetails;
