import React from "react";
import { IoBagOutline } from "react-icons/io5";
import { LuMessageSquareText } from "react-icons/lu";
import { LuPackage2 } from "react-icons/lu";
import Link from "next/link";
import Image from "next/image";

function Page() {
  return (
    <div className="flex flex-col md:flex-row justify-between p-6">
      {/* Left Section */}
      <div className="md:w-2/3 pr-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="ml-4">
          <Image
  src="/logo2.png"
  alt="Logo"
  width={58.85}
  height={20.54}
  className="w-24"
/>
          </div>
          <div className="flex gap-6 items-center">
            <p>000 800 100 9538</p>
            <LuMessageSquareText size={20} />
            <IoBagOutline size={20} />
          </div>
        </div>

        {/* Order Details */}
        <div>
          <h1 className="text-xl font-bold mb-4">
            How would you like to get your order?
          </h1>
          <p className="text-gray-600 text-sm mb-6">
            Customs regulation for India requires a copy of the recipient&apos;s KYC.
            The address on the KYC needs to match the shipping address. Our
            courier will contact you via SMS/email to obtain a copy of your KYC.
            The KYC will be stored securely and used solely for the purpose of
            clearing customs (including sharing it with customs officials) for
            all orders and returns. If your KYC does not match your shipping
            address, please click the link for more information.{" "}
            <Link href="#" className="text-blue-600 underline">
              Learn More
            </Link>
          </p>
          <div className="flex items-center border-2 border-black rounded-lg p-4 cursor-pointer hover:bg-gray-100 transition mb-6">
            <LuPackage2 size={20} className="mr-2" />
            <span className="text-lg font-semibold">Deliver It</span>
          </div>
        </div>

        {/* Address Form */}
        <div>
          <h2 className="text-lg font-bold mb-4">
            Enter your name and address:
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full border p-2 rounded-md"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full border p-2 rounded-md"
            />
            <input
              type="text"
              placeholder="Address Line 1"
              className="w-full border p-2 rounded-md"
            />
            <input
              type="text"
              placeholder="Address Line 2"
              className="w-full border p-2 rounded-md"
            />
            <input
              type="text"
              placeholder="Address Line 3"
              className="w-full border p-2 rounded-md"
            />
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Postal Code"
                className="w-1/2 border p-2 rounded-md"
              />
              <input
                type="text"
                placeholder="Locality"
                className="w-1/2 border p-2 rounded-md"
              />
            </div>
            <input
              type="text"
              placeholder="State/Territory"
              className="w-full border p-2 rounded-md"
              list="countries"
            />
            <datalist id="countries">
              <option value="India" />
              <option value="USA" />
              <option value="Canada" />
              <option value="Australia" />
            </datalist>

            <div className="flex items-center">
              <input type="checkbox" id="saveToProfile" className="mr-2" />
              <label htmlFor="saveToProfile" className="text-sm">
                Save this address to my profile
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="preferredAddress" className="mr-2" />
              <label htmlFor="preferredAddress" className="text-sm">
                Make this my preferred address
              </label>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="mt-6">
          <h2 className="text-lg font-bold mb-4">
            What&apos;s your contact information?
          </h2>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full border p-2 rounded-md"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border p-2 rounded-md"
            />
          </form>
        </div>

        {/* PAN */}
        <div className="mt-6">
          <h2 className="text-lg font-bold mb-4">What&apos;s your PAN?</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="PAN"
              className="w-full border p-2 rounded-md"
            />
            <p className="text-sm text-gray-600">
              Enter your PAN to enable payment with UPI, Net Banking or local
              card methods.
            </p>
            <div className="flex items-center">
              <input type="checkbox" id="consent" className="mr-2" />
              <label htmlFor="consent" className="text-sm">
                I have read and consent to eShopWorld processing my information
                in accordance with the{" "}
                <Link href="#" className="text-blue-600 underline">
                  Privacy Statement
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-blue-600 underline">
                  Cookie Policy
                </Link>
                .
              </label>
            </div>
          </form>
        </div>

        {/* Continue Button */}
        <div className="mt-6">
          <button className="w-full bg-gray-400 text-white py-2 rounded-md">
            Continue
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/3">
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold">₹20,890.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Delivery/Shipping</span>
              <span className="font-semibold">Free</span>
            </div>
            <div className="flex justify-between border-t pt-4">
              <span className="font-bold">Total</span>
              <span className="font-bold">₹20,890.00</span>
            </div>
          </div>

          <p className="text-sm text-gray-600 mt-4">
            (The total reflects the price of your order, including all duties
            and taxes.)
          </p>

          <h3 className="font-semibold text-sm mt-6">
            Arrives Mon, 27 Mar - Wed, 12 Apr
          </h3>

          <div className="mt-6">
            <div className="flex items-start gap-4">
                  <Image
              src="/Frame (3).png"
              alt="Product"
              width={208}  // Specify the width
              height={208} // Specify the height
              className=" object-cover rounded-lg"
            />
              <div>
                <h3 className="font-bold">Nike Dri-FIT ADV TechKnit Ultra</h3>
                <p className="text-sm text-gray-600">
                  Men&apos;s Short-Sleeve Running Top
                </p>
                <p className="text-sm text-gray-600">Size: L | Quantity: 1</p>
              </div>
            </div>

            <div className="flex items-start gap-4 mt-4">
                   <Image
               src="/Frame (4).png"
               alt="Product"
               width={208}  // Specify the width
               height={208} // Specify the height
               className=" object-cover rounded-lg"
             />
              <div>
                <h3 className="font-bold">Nike Air Max 97 SE</h3>
                <p className="text-sm text-gray-600">Men&apos;s Shoes</p>
                <p className="text-sm text-gray-600">
                  Size: UK 8 | Quantity: 1
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
