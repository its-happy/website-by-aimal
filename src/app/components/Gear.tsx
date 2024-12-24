import Image from "next/image";
import React from "react";

function Gear() {
  return (
    <div>
      <section className="bg-white py-10 px-4 sm:px-8 lg:px-16">
        {/* Section Title */}
        <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center">
          Gear Up
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Product 1 */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/Image (19).png"
              alt="Nike Dri-FIT ADV TechKnit Ultra"
              width={288} // Adjust width as needed
              height={288} // Adjust height as needed
              className="w-72 h-72 object-cover rounded-lg"
            />
            <h3 className="mt-4 font-semibold">
              Nike Dri-FIT ADV TechKnit Ultra
            </h3>
            <p className="text-gray-500">Men&apos;s Short-Sleeve Running Top</p>
            <p className="mt-2 font-bold">₹ 3895</p>
          </div>

          {/* Product 2 */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/Image (5).png"
              alt="Nike Dri-FIT Challenger"
              width={288} // Adjust width as needed
              height={288} // Adjust height as needed
              className="w-72 h-72 object-cover rounded-lg"
            />
            <h3 className="mt-4 font-semibold">Nike Dri-FIT Challenger</h3>
            <p className="text-gray-500">
              Men&apos;s 18cm (approx.) 2-in-1 Versatile Shorts
            </p>
            <p className="mt-2 font-bold">₹ 2495</p>
          </div>

          {/* Product 3 */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/Image (6).png"
              alt="Nike Dri-FIT ADV Run Division"
              width={288} // Adjust width as needed
              height={288} // Adjust height as needed
              className="w-72 h-72 object-cover rounded-lg"
            />
            <h3 className="mt-4 font-semibold">
              Nike Dri-FIT ADV Run Division
            </h3>
            <p className="text-gray-500">Women&apos;s Long-Sleeve Running Top</p>
            <p className="mt-2 font-bold">₹ 5295</p>
          </div>

          {/* Product 4 */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/Image (7).png"
              alt="Nike Fast"
              width={288} // Adjust width as needed
              height={288} // Adjust height as needed
              className="w-72 h-72 object-cover rounded-lg"
            />
            <h3 className="mt-4 font-semibold">Nike Fast</h3>
            <p className="text-gray-500">
              Women&apos;s Mid-Rise 7/8 Running Leggings with Pockets
            </p>
            <p className="mt-2 font-bold">₹ 3795</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gear;
