import React from "react";
import Image from "next/image";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaPinterestP,
    FaYoutube,
    FaPaypal,
    FaCcVisa,
    FaCcMastercard,
    FaCcAmex,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#fbf7ef] border-t border-gray-200 px-4 sm:px-12 md:px-28">
            <div className="mx-auto py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="flex flex-col items-start">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/logo.png"
                                alt="logo"
                                width={90}
                                height={50}
                            />
                        </div>
                        <p className="mt-4 text-gray-500">
                        Embark on unforgettable journeys. Book your dream vacation today!
                        </p>
                        <div className="flex gap-4 mt-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-[#007580] text-xl border-2 border-transparent rounded-full hover:border-[#007580]"
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-[#007580] text-xl border-2 border-transparent rounded-full hover:border-[#007580]"
                            >
                                <FaTwitter />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-[#007580] text-xl border-2 border-transparent rounded-full hover:border-[#007580]"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="https://pinterest.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-[#007580] text-xl border-2 border-transparent rounded-full hover:border-[#007580]"
                            >
                                <FaPinterestP />
                            </a>
                            <a
                                href="https://youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-[#007580] text-xl border-2 border-transparent rounded-full hover:border-[#007580]"
                            >
                                <FaYoutube />
                            </a>
                        </div>
                    </div>

                    {/* Category Section */}
                    <div>
                        <h4 className="text-lg font-semibold text-[#9A9CAA]">Category</h4>
                        <ul className="mt-4 text-[#272343] space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-[#007580] hover:underline"
                                >
                                    Products
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-[#007580] hover:underline"
                                >
                                   About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-[#007580] hover:underline"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Support Section */}
                    <div>
                        <h4 className="text-lg font-semibold text-[#9A9CAA]">Support</h4>
                        <ul className="mt-4 text-[#272343] space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-[#007580] hover:underline"
                                >
                                    Help & Support
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-[#007580] hover:underline"
                                >
                                    Terms & Conditions
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-[#007580] hover:underline"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter Section */}
                    <div>
                        <h4 className="text-lg font-semibold text-[#9A9CAA]">Newsletter</h4>
                        <div className="mt-4 flex gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="px-4 py-2 w-full border text-[#9A9CAA] border-gray-300 rounded-l-md focus:outline-none"
                            />
                            <button className="bg-[#029FAE] text-white px-6 py-2 rounded-md hover:bg-teal-700">
                                Subscribe
                            </button>
                        </div>
                        <p className="mt-4 text-gray-500">
                            Sign up to receive exclusive offers, the latest updates on new products straight to your inbox.
                        </p>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center text-[#9A9CAA] border-t pt-8 mt-8">
                    <p className="text-center">
                    © 2025 - Blogy - Designed & Developed by{" "}
                        <a href="#" className="text-[#272343] hover:underline">
                            RD
                        </a>
                    </p>
                    <div className="flex justify-center space-x-4 mt-4 md:mt-0">
                        <FaCcMastercard size={40} />
                        <FaPaypal size={40} />
                        <FaCcAmex size={40} />
                        <FaCcVisa size={40} />
                    </div>
                </div>
            </div>
        </footer>
    );
}


