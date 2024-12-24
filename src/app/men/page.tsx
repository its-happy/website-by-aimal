import Image from "next/image";
import React from "react";

function Page() {
  return (
    <div className="flex flex-col md:flex-row gap-8 px-6 md:px-24 py-10">
      {/* Left Section */}
      <div className="w-full md:w-2/3">
        {/* Free Delivery Section */}
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h1 className="font-bold text-lg">Free Delivery</h1>
          <div className="flex gap-6">
            <p>Applies to orders of ₹ 14,000.00 or more.</p>
            <h2 className="underline font-semibold cursor-pointer">
              View details
            </h2>
          </div>
        </div>

        {/* Product 1 */}
        <div className="font-bold text-2xl mb-4">Bag</div>
        <div className="flex gap-4 items-start border-b border-gray-300 pb-4 mb-4">
          <div className="w-24 h-24">
          <Image
  src="/Frame (3).png"
  alt="Product"
  width={150}  // Specify the width
  height={150} // Specify the height
  className="w-full h-full object-cover rounded-lg"
/>
          </div>
          <div className="flex-grow">
            <h3 className="font-semibold text-lg text-gray-800 mb-1">
              Nike Dri-FIT ADV TechKnit Ultra
            </h3>
            <p className="text-sm text-gray-600">
              Men&apos;s Short-Sleeve Running Top
            </p>
            <p className="text-sm text-gray-600">Ashen Slate/Cobalt Bliss</p>
            <p className="text-sm text-gray-600">
              Size: L <span className="mx-2">|</span> Quantity: 1
            </p>
          </div>
          <div>
            <h1 className="text-lg">MRP: ₹ 3,895.00</h1>
          </div>
        </div>

        {/* Product 2 */}
        <div className="flex gap-4 items-start border-b border-gray-300 pb-4 mb-4">
          <div className="w-24 h-24">
          <Image
  src="/Frame (4).png"
  alt="Product"
  width={150}  // Specify the width
  height={150} // Specify the height
  className="w-full h-full object-cover rounded-lg"
/>
          </div>
          <div className="flex-grow">
            <h3 className="font-semibold text-lg text-gray-800 mb-1">
              Nike Air Max 97 SE
            </h3>
            <p className="text-sm text-gray-600">Men&apos;s Shoes</p>
            <p className="text-sm text-gray-600">
              Flat Pewter/Light Bone/Black/White
            </p>
            <p className="text-sm text-gray-600">
              Size: L <span className="mx-2">|</span> Quantity: 1
            </p>
          </div>
          <div>
            <h1 className="text-lg">MRP: ₹ 16,995.00</h1>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/3">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Summary</h2>

          <div className="flex justify-between items-center mb-3">
            <p className="text-gray-600">Subtotal</p>
            <p className="text-gray-800 font-medium">₹20,890.00</p>
          </div>
          <div className="flex justify-between items-center mb-3">
            <p className="text-gray-600">Estimated Delivery & Handling</p>
            <p className="text-gray-800 font-medium">Free</p>
          </div>
          <div className="flex justify-between items-center border-t border-gray-300 pt-4 mb-4">
            <p className="text-gray-800 font-bold">Total</p>
            <p className="text-gray-800 font-bold">₹20,890.00</p>
          </div>
          <div>
            <a href="/checkout">
              <button className="w-full bg-black text-white py-3 rounded-md text-center text-lg hover:bg-gray-800">
                Member Checkout
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
