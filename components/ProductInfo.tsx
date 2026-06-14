"use client";

import { useState } from "react";
import { useCart } from "@/app/lib/CartContext";

export interface ProductDetails {
  name: string;
  price: string;
  priceValue: number;
  inStock: boolean;
  sizingOptions: string[];
  colours: string[];
  sizes: string[];
  details: string;
  materials: string[];
  madeToOrder: string;
  fit: string;
  image: string;
  slug: string;
}

interface ProductInfoProps {
  product: ProductDetails;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [sizingOption, setSizingOption] = useState("");
  const [colour, setColour] = useState(product.colours[0] || "");
  const [size, setSize] = useState(product.sizes[0] || "");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    if (!size || !colour) return;
    addItem({
      id: `${product.slug}-${colour}-${size}`,
      slug: product.slug,
      name: product.name,
      price: product.priceValue,
      priceFormatted: product.price,
      image: product.image,
      colour,
      size,
      quantity,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="w-full">
      <h1 className="text-page-title text-purple-200 tracking-wide mb-4">
        {product.name}
      </h1>

      <p className="text-price text-purple-200 tracking-wide mb-8">
        {product.price}
      </p>

      <div className="mb-5">
        <label className="block text-detail-label text-purple-200 tracking-wide mb-2">
          sizing option
        </label>
        <select
          value={sizingOption}
          onChange={(e) => setSizingOption(e.target.value)}
          className="w-full border border-purple-600 bg-transparent text-detail-value text-purple-200 py-2.5 px-3"
        >
          <option value="">Please choose</option>
          {product.sizingOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-5">
        <label className="block text-detail-label text-purple-200 tracking-wide mb-2">
          colour
        </label>
        <select
          value={colour}
          onChange={(e) => setColour(e.target.value)}
          className="w-full border border-purple-600 bg-transparent text-detail-value text-purple-200 py-2.5 px-3"
        >
          {product.colours.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-5">
        <label className="block text-detail-label text-purple-200 tracking-wide mb-2">
          size
        </label>
        <select
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="w-full border border-purple-600 bg-transparent text-detail-value text-purple-200 py-2.5 px-3"
        >
          {product.sizes.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-5">
        <label className="block text-detail-label text-purple-200 tracking-wide mb-2">
          quantity
        </label>
        <div className="flex items-center border border-purple-600 w-fit">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="px-4 py-2.5 text-purple-200 hover:bg-purple-900 transition-colors"
          >
            −
          </button>
          <span className="px-4 py-2.5 text-purple-200 text-detail-value min-w-[3rem] text-center">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="px-4 py-2.5 text-purple-200 hover:bg-purple-900 transition-colors"
          >
            +
          </button>
        </div>
      </div>

      <p className="text-detail-label text-purple-200 tracking-wide mb-4">
        {product.inStock ? "In stock" : "Out of stock"}
      </p>

      <button
        onClick={handleAddToCart}
        className={`w-full text-detail-label tracking-wide py-3 mb-10 transition-colors ${
          added
            ? "bg-purple-400 text-purple-950"
            : "bg-purple-600 text-purple-100 hover:bg-purple-700"
        }`}
      >
        {added ? "Added to Bag" : "Add to Bag"}
      </button>

      <div className="mb-6">
        <h2 className="text-detail-label text-purple-200 tracking-wide mb-3">
          Product Details
        </h2>
      </div>

      <div className="mb-5">
        <p className="text-detail-label text-purple-200 tracking-wide mb-1">
          Details:
        </p>
        <p className="text-detail-value text-purple-300 leading-relaxed">
          {product.details}
        </p>
      </div>

      <div className="mb-5">
        <p className="text-detail-label text-purple-200 tracking-wide mb-1">
          Materials:
        </p>
        {product.materials.map((material, index) => (
          <p key={index} className="text-detail-value text-purple-300 leading-relaxed">
            {material}
          </p>
        ))}
      </div>

      <div className="mb-5">
        <p className="text-detail-label text-purple-200 tracking-wide mb-1">
          Made to Order:
        </p>
        <p className="text-detail-value text-purple-300 leading-relaxed">
          {product.madeToOrder}
        </p>
      </div>

      <div className="mb-5">
        <p className="text-detail-label text-purple-200 tracking-wide mb-1">
          Fit:
        </p>
        <p className="text-detail-value text-purple-300 leading-relaxed">
          {product.fit}
        </p>
      </div>

      <div className="mt-6 space-y-2">
        <p className="text-detail-value text-purple-400 underline underline-offset-2 cursor-pointer hover:text-purple-200 transition-colors">
          size/colour chart
        </p>
        <p className="text-detail-value text-purple-400 underline underline-offset-2 cursor-pointer hover:text-purple-200 transition-colors">
          care
        </p>
        <p className="text-detail-value text-purple-400 underline underline-offset-2 cursor-pointer hover:text-purple-200 transition-colors">
          shipping
        </p>
      </div>
    </div>
  );
}
