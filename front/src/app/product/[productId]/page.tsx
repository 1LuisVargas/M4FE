import IProduct from "@/interfaces/IProduct";
import { getProductById } from "@/services/products.services";
import ProductCard from "@/components/ProductCard";
import { notFound } from "next/navigation";

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
      <div>
        <ProductCard product={product} />
      </div>
    );
  } catch (error) {
    console.log(error);
    notFound();
  }
};

export default ProductDetails;
