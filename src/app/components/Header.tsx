import Link from 'next/link';
import React from 'react';
import { IoSearchOutline } from "react-icons/io5";
import Image from 'next/image';

function Header() {
  return (
    <header>
      <div className="bg-gray-200 h-[36px] flex lg:justify-between justify-center items-center px-4">
        <div>
          <Image src="/logo1.png" alt="Nike Logo" width={30} height={30} />
        </div>

        <div className="flex lg:gap-4 gap-2 text-black font-medium text-sm">
          <Link href="/find-a-store">Find a Store</Link>
          <span className="border-l border-black h-4 mx-2"></span>
          <Link href="/help">Help</Link>
          <span className="border-l border-black h-4 mx-2"></span>
          <Link href="/join-us">Join Us</Link>
          <span className="border-l border-black h-4 mx-2"></span>
          <Link href="/sign-in">Sign In</Link>
        </div>
      </div>

      <div>
        <nav className="bg-white h-[58px] flex lg:justify-between justify-center items-center px-6">
          <div>
            <Image src="/logo2.png" alt="Nike Logo 2" width={50} height={50} />
          </div>

          <div className="lg:ml-40 flex justify-center lg:gap-8 gap-3 text-black font-medium lg:text-lg text-[13px] ml-2">
            <Link href="/">Home</Link>
            <Link href="/new">New & Featured</Link>
            <Link href="/men">Men</Link>
            <Link href="/women">Women</Link>
            <Link href="/kids">Kids</Link>
            <Link href="/sale">Sale</Link>
            <Link href="/snkrs">SNKRS</Link>
          </div>

          <div className="lg:flex items-center relative ml-6 hidden">
            <IoSearchOutline className="absolute left-4 top-2" />
            <input
              type="text"
              placeholder="Search"
              aria-label="Search"
              className="p-2 w-[180px] h-[40px] border border-gray-300 rounded-2xl pl-10"
            />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
