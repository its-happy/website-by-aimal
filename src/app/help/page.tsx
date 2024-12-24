import React from "react";
import {
  IoIosThumbsUp,
  IoIosThumbsDown,
  IoIosPhonePortrait,
} from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { RiMessage2Fill } from "react-icons/ri";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

function Page() {
  return (
    <div className="pt-20 px-8 lg:px-20">
      {/* Section for Search */}
      <div className="mb-8">
        <h1 className="text-center text-[30px] font-bold uppercase">
          Get Help
        </h1>
        <div className="flex justify-center mt-4">
          <div className="flex items-center w-full max-w-3xl h-[56px] border border-gray-300 rounded-md px-4">
            <input
              type="text"
              placeholder="What can we help you with?"
              className="flex-grow outline-none text-black"
            />
            <CiSearch className="text-[20px] text-gray-400" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row pt-10">
        {/* Left Section (FAQs and Main Content) */}
        <div className="lg:w-2/3 lg:pr-24 border-r border-gray-300 mr-16 lg:mr-0">
          {/* Payment Options */}
          <div>
            <h2 className="text-[25px] font-bold pt-5">
              WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
            </h2>
            <p className="leading-10">
              We want to make buying your favourite Nike shoes and gear online
              fast and easy, and we accept the following payment options:
              <br />
              Visa, Mastercard, Diners Club, Discover, American Express, Visa
              Electron, Maestro
              <br />
              If you enter your PAN information at checkout, you&apos;ll be able to
              pay for your order with PayTM or a local credit or debit card.
              <br />
              Apple Pay
            </p>
            <p className="mt-4">
              <b className="font-bold underline">Nike Members </b>can store
              multiple debit or credit cards in their profile for faster
              checkout. If you&apos;re not already a Member,{" "}
              <b className="cursor-pointer underline">join us today</b>.
            </p>
          </div>

          {/* Join Us and Shop Buttons */}
          <div className="flex gap-4 mt-6 flex-wrap">
            <button className="bg-black text-white py-2 px-6 rounded-full">
              JOIN US
            </button>
            <button className="bg-black text-white py-2 px-6 rounded-full">
              SHOP NIKE
            </button>
          </div>

          {/* FAQ Section */}
          <div className="mt-8">
            <h1 className="text-[20px] font-bold">FAQs</h1>
            <div className="mt-4">
              <h2 className="text-[15px] font-semibold">
                Does my card need international purchases enabled?
              </h2>
              <p>
                Yes, we recommend asking your bank to enable international
                purchases on your card. You will be notified at checkout if
                international purchases need to be enabled.
              </p>
              <p className="mt-3">
                Please note, some banks may charge a small transaction fee for
                international orders.
              </p>
            </div>
            <div className="mt-4">
              <h2 className="text-[15px] font-semibold">
                Can I pay for my order with multiple methods?
              </h2>
              <p>
                No, payment for Nike orders can&apos;t be split between multiple
                payment methods.
              </p>
            </div>
            <div className="mt-4">
              <h2 className="text-[15px] font-semibold">
                What payment method is accepted for SNKRS orders?
              </h2>
              <p>
                You can use any accepted credit card to pay for your SNKRS
                order.
              </p>
            </div>
            <div className="mt-4">
              <h2 className="text-[15px] font-semibold">
                Why don&apos;t I see Apple Pay as an option?
              </h2>
              <p>
                To see Apple Pay as an option in the Nike App or on Nike.com,
                you&apos;ll need to use a compatible Apple device running the latest
                OS, be signed in to your iCloud account and have a supported
                card in your Wallet. Additionally, you&apos;ll need to use Safari to
                use Apple Pay on Nike.com.
              </p>
            </div>

            {/* Was this answer helpful? */}
            <div className="mt-4">
              <p className="text-gray-700 text-[13px] mt-4">
                Was this answer helpful?
              </p>
              <div className="flex gap-4 text-[25px] mt-2">
                <IoIosThumbsUp />
                <IoIosThumbsDown />
              </div>
              <p className="text-gray-500 text-[13px] mt-4">RELATED</p>
              <p className="mt-4 font-bold text-[13px] underline leading-8">
                WHAT ARE NIKE&apos;S DELIVERY OPTIONS?
                <br />
                HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
              </p>
            </div>
          </div>
        </div>

        {/* Right Section (Contact Us) */}
        <div className="flex justify-center text-center">
          <div>
            {/* Phone */}
            <div className="flex flex-col items-center pb-6">
              <h1 className="text-[20px] font-bold">CONTACT US</h1>
              <h2>
                <IoIosPhonePortrait className="text-[70px]" />
              </h2>
              <p className="leading-7">
                000 800 919 0566
                <br />
                Products & Orders: 24 hours a day, <br /> 7 days a week <br />
                Company Info & Enquiries: 07:30 - <br /> 16:30, Monday - Friday
              </p>
            </div>
            {/* Message */}
            <div className="flex flex-col items-center pb-6">
              <h1>
                <RiMessage2Fill className="text-[56px]" />
              </h1>
              <p>
                <b>24 hours a day</b> <br />7 days a week
              </p>
            </div>
            {/* Email */}
            <div className="flex flex-col items-center pt-6">
              <h1>
                <IoIosMail className="text-[56px]" />
              </h1>
              <p>
                <b>We&apos;ll reply within </b>
                <br />
                five business days
              </p>
            </div>
            {/* Store Locator */}
            <div className="flex flex-col items-center pt-6">
              <h1>
                <FaLocationDot className="text-[56px]" />
              </h1>
              <p>
                <b>STORE LOCATOR</b> <br />
                Find Nike retail stores near you
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
