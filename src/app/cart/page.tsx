"use client";
import React, { useEffect, useState } from "react";

const CartPage = () => {
    const [cart, setCart] = useState<any[]>([]);

    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    return (
        <div className="py-[50px] px-[20px]">
            <h1 className="text-[28px] font-bold mb-[20px]">Your Cart</h1>
            {cart.length > 0 ? (
                <div className="grid gap-[20px] sm:grid-cols-2 lg:grid-cols-3">
                    {cart.map((product, index) => (
                        <div key={index} className="w-full bg-white shadow-lg p-[20px] rounded-[8px]">
                            <img src={product.image} alt={product.title} className="h-[180px] mx-auto" />
                            <p className="font-bold text-[20px] mb-[8px]">{product.title}</p>
                            <p className="text-[18px] mb-[8px]">${product.price}</p>
                            <p className="line-clamp-2 text-gray-600 mb-[8px]">{product.description}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-[18px]">Your cart is empty!</p>
            )}
        </div>
    );
};

export default CartPage;
