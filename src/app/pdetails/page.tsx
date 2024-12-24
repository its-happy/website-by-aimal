import Image from "next/image";
import React from "react";
import { IoCartOutline } from "react-icons/io5";

function Page() {
  return (
    <div className="flex flex-col items-center bg-white text-gray-900">
      <div className="flex flex-wrap max-w-6xl mx-auto py-16">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/Rectangle.png" // Ensure the image is in the public directory
            alt="Nike Air Force 1"
            className="max-w-full rounded-md shadow-md"
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 px-8">
          <h1 className="text-3xl font-bold mb-4">
            Nike Air Force 1 <br />
            PLT.AF.ORM
          </h1>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Turn style on its head with this crafted take on the Air Jordan 1
            Mid. Its inside out-inspired construction, including unique
            layering and exposed foam accents, ups the ante on this timeless
            Jordan Brand silhouette. Details like the deco stitching on the
            Swoosh add coveted appeal, while the unexpected shading, rich
            mixture of materials and aged midsole aesthetic give this release an
            artisan finish.
          </p>

          {/* Price Section */}
          <div className="text-2xl font-semibold mb-4">₹ 8,695.00</div>

          {/* Add to Cart Button */}
          <button className="w-full md:w-auto rounded-md bg-black text-white px-6 py-3 text-lg hover:bg-gray-800 flex items-center justify-center gap-2">
            <IoCartOutline className="text-2xl" />
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
