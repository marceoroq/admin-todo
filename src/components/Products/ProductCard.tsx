// https://tailwindcomponents.com/component/e-commerce-product-card

import Image from "next/image";
import { IoAddCircleOutline, IoTrashOutline } from "react-icons/io5";
import { Product } from "./products";
import Rating from "../Rating";

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="shadow rounded-lg max-w-sm bg-sky-900 border-gray-100">
      {/* Product Image */}
      <div className="p-2">
        <Image
          width={500}
          height={500}
          className="rounded"
          src={product.image}
          alt={`${product.name} image`}
        />
      </div>

      {/* Title */}
      <div className="px-5 pb-5">
        <a href="#">
          <h3 className="font-semibold text-xl tracking-tight text-white">
            {product.description}
          </h3>
        </a>

        <Rating rating={product.rating} />

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold  text-white">
            ${product.price}
          </span>
          <div className="flex">
            <button className="text-white mr-2 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
              <IoAddCircleOutline size={25} />
            </button>
            <button className="text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-red-600 hover:bg-red-700 focus:ring-red-800">
              <IoTrashOutline size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
