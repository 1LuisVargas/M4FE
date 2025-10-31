"use client";

import IProduct from "@/interfaces/IProduct";
import { useRouter } from "next/navigation";

export default function ViewDetails({ product }: { product: IProduct }) {
  const router = useRouter();

  return (
    <button
      className="formButton"
      onClick={ () => router.push(`/product/${product.id}`)}
    >
      View details
    </button>
  );
}
