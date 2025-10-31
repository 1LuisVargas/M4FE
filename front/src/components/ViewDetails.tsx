"use client";

import IProduct from "@/interfaces/IProduct";
import Link from "next/link";

export default function ViewDetails({ product }: { product: IProduct }) {
    return (
        <Link className="formButton" href={`/product/${product.id}`}>View details</Link>
    );
}