
"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import Link from "next/link"; // Corrected Link import

// Product type definition
type Data = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

// Products Page
const Page = () => {
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState<Data[]>([]); // Cart state to store products in the cart

  // Fetch products
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    const fetchData = async () => {
      const url = await fetch("https://fakestoreapi.com/products");
      const parsedData: Data[] = await url.json();
      setData(parsedData);
    };
    fetchData();

    // Load cart from localStorage
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Add to Cart function
  const addToCart = (product: Data) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save cart to localStorage
    alert(`${product.title} added to cart!`);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <Link href="/">
          <h1 className="text-xl font-bold">Main</h1>
        </Link>
        <Link href="/cart">
          <button className="relative py-2 px-4 bg-blue-600 rounded-lg hover:bg-blue-700">
            Cart ({cart.length})
          </button>
        </Link>
      </nav>

      {/* Loading Spinner */}
      {loading ? (
        <div className="h-screen flex flex-col items-center justify-center px-[20px] sm:px-[0px] bg-[#fbf7ef]">
          <div className="w-[80px] h-[80px] border-t-[10px] border-t-[gray] border-[10px] border-[lightgray] mt-[15px] animate-spin rounded-[50%]"></div>
          <h1 className="text-[25px] mt-[15px]">Loading...</h1>
        </div>
      ) : (
        // Products Section
        <div className="py-[50px] px-[20px] sm:px-[30px] md:px-[40px] lg:px-[50px] bg-[#fbf7ef]">
          <h1 className="mb-[40px] text-center text-[20px] sm:text-[28px] md:text-[30px] font-[700] text-[#2b3749]">
            New Arrivals
          </h1>
          <div className="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-3 bg-[#fbf7ef]">
            {data.map((product, index) => (
              <div
                key={index}
                className="w-full bg-[white] shadow-lg p-[20px] rounded-[8px] hover:shadow-xl hover:scale-[1.05] transition-all"
              >
                <div className="h-[180px]">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={100}
                    height={100}
                    className="size-[180px] mx-auto"
                  ></Image>
                </div>
                <p className="mt-[50px] mb-[8px] text-[gray] capitalize">
                  {product.category}
                </p>
                <p className="font-bold text-[20px] mb-[8px]">{product.title}</p>
                <p className="line-clamp-2 text-[gray] mb-[8px]">
                  {product.description}
                </p>
                <p className="text-[20px] font-semibold mb-[8px]">
                  ${product.price}
                </p>
                <p className="text-[orange] text-[18px] flex items-center mb-[10px]">
                  <IoIosStar />
                  <span className="mr-[5px]">{product.rating.rate}</span>(
                  {product.rating.count} reviews)
                </p>
                <div className="flex items-center justify-end">
                  <button
                    onClick={() => addToCart(product)} // Adding product to cart
                    className="py-[7px] px-[12px] bg-[#2b3749] text-[white] rounded-[30px] hover:bg-[#305f62] text-[17px]"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
