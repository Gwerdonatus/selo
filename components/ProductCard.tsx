"use client";

import Image from "next/image";
import Link from "next/link";

export interface Product {
  id: string;
  slug: string;
  name: string;
  price: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/shop/${product.slug}`} className="block group">
      <div className="relative w-full aspect-square bg-purple-950 overflow-hidden mb-3">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="text-center">
        <p className="text-product-name text-purple-200 tracking-wide lowercase mb-0.5">
          {product.name}
        </p>
        <p className="text-product-price text-purple-400 tracking-wide">
          {product.price}
        </p>
      </div>
    </Link>
  );
}
