"use client";
import IProduct from "@/interfaces/IProduct";
import { getProductById } from "@/services/products.services";
import { useParams } from "next/navigation";
import { useEffect, useState} from "react";
import Image from "next/image";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    const fetchProductById = async () => {
      const temporaryProduct = await getProductById(params.productId as string);
      setProduct(temporaryProduct);
    };

    fetchProductById();
  }, [params.productId]);

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
