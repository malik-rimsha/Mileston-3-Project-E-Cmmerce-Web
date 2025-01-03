import React from "react"
import Link from "next/link"

export default function Hero() {
  return (<div className="flex justify-center items-center mt-10 bg-[#fbf7ef]">
    <div><div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg- before:opacity-50 before:z-10">
      <img src="RD1.png" alt="image" className="absolute inset-0 w-full h-full object-cover" />
      <div className="min-h-[350px] relative z-50 h-full max-w-7xl mx-auto flex flex-col justify-center items-center text-center text-Black p-6">
        <h2 className="sm:text-4xl text-2xl font-bold mb-6">Shop the Latest Trends in Fashion.</h2>
        <p className="sm:text-lg text-base text-center text-black">Embark on unforgettable journeys. Book your dream vacation today!</p>
        <Link href="/Products">
          <button
            type="button"
            className="mt-12 bg-transparent text-black text-base py-3 px-6 border border-white rounded-lg hover:bg-white hover:text-black transition duration-300">
            Shop Now
          </button>
        </Link>
      </div>
    </div></div>
  </div>
  )
}
