import Link from 'next/link'
import React from 'react'
import Newimg from '../components/Newimg'

function NewArrivals() {
  return (
    <div className="my-20 max-w-[1300px] mx-auto flex gap-x-4 lg:gap-x-20">
      <section className="flex flex-col max-w-[200px]">
        <h1 className="font-semibold text-sm md:text-2xl">New (500)</h1>
        <div className="font-semibold text-[11px] lg:text-xl max-w-[150px] space-y-2 mt-6 flex flex-col">
          <Link href={""}>Shoes</Link>
          <Link href={""}>Sports Bras</Link>
          <Link href={""}>Tops & T-Shirts</Link>
          <Link href={""}>Hoodies & Sweatshirts</Link>
          <Link href={""}>Jackets</Link>
          <Link href={""}>Trousers & Tights</Link>
          <Link href={""}>Shorts</Link>
          <Link href={""}>Tracksuits</Link>
          <Link href={""}>Jumpsuits & Rompers</Link>
          <Link href={""}>Skirts & Dresses</Link>
          <Link href={""}>Socks</Link>
          <Link href={""}>Accessories & Equipment</Link>
        </div>

        {/* Filters Section */}
        <section>
          {/* Gender Filter */}
          <div className="pt-10">
            <div className="border-t border-slate-400 mb-2">
              <h2 className="mt-3 font-semibold">Gender</h2>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="flex items-center space-x-2" htmlFor="male">
                <input type="checkbox" name="gender" id="male" className="h-4 w-4" />
                <span className="text-sm">Male</span>
              </label>
              <label className="flex items-center space-x-2" htmlFor="female">
                <input type="checkbox" name="gender" id="female" className="h-4 w-4" />
                <span className="text-sm">Female</span>
              </label>
              <label className="flex items-center space-x-2" htmlFor="unisex">
                <input type="checkbox" name="gender" id="unisex" className="h-4 w-4" />
                <span className="text-sm">Unisex</span>
              </label>
            </div>
          </div>

          {/* Kids Filter */}
          <div className="pt-10">
            <div className="border-t border-slate-400 mb-2">
              <h2 className="mt-3 font-semibold">Kids</h2>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="flex items-center space-x-2" htmlFor="boys">
                <input type="checkbox" name="kids" id="boys" className="h-4 w-4" />
                <span className="text-sm">Boys</span>
              </label>
              <label className="flex items-center space-x-2" htmlFor="girls">
                <input type="checkbox" name="kids" id="girls" className="h-4 w-4" />
                <span className="text-sm">Girls</span>
              </label>
            </div>
          </div>

          {/* Price Filter */}
          <div className="pt-10">
            <div className="border-t border-slate-400 mb-2">
              <h2 className="mt-3 font-semibold">Shop By Price</h2>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="flex items-center space-x-2" htmlFor="under-2500">
                <input type="checkbox" name="price" id="under-2500" className="h-4 w-4" />
                <span className="text-sm">Under ₹ 2,500.00</span>
              </label>
              <label className="flex items-center space-x-2" htmlFor="2501">
                <input type="checkbox" name="price" id="2501" className="h-4 w-4" />
                <span className="text-sm">₹ 2,501.00 and above</span>
              </label>
            </div>
          </div>
        </section>
      </section>

      {/* Image Section */}
      <div>
        <Newimg />
      </div>
    </div>
  )
}

export default NewArrivals;
