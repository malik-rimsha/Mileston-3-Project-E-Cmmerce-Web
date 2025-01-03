import Link from "next/link";
import { Input } from "./ui/input";
import { Heart, Menu, Search, ShoppingBagIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

export default function Navbar() {
  return (
    <nav className="w-full border-b-2 bg-[#fbf7ef]  p-4">
      <div className="max-w-7xl h-6 mx-auto flex items-center justify-between">
        {/* Logo */}
        <img
          src="logo.png"
          alt="Logo"
          className="h-12 w-12 md:h-20 md:w-20 ml-4"
        />

        {/* Navigation Links */}
        <div className="hidden md:flex gap-6 font-bold">
          <Link href="/" className="text-sm font-normal">
            Home
          </Link>
          <Link href="/Products" className="text-sm font-normal">
           Products
          </Link>
          <Link href="/About" className="text-sm font-normal">
           About
          </Link>
          <Link href="/Contact" className="text-sm font-normal">
            Contact
          </Link>
        </div>

        {/* Search and Icons */}
        <div className="hidden md:flex gap-4 items-center">
          <div className="relative">
            <Input
              placeholder="Search"
              className="bg-[#fbf7ef] rounded-full pl-4 pr-10"
            />
            <Search className="absolute right-3 top-2 text-gray-500" />
          </div>
          <Button variant="outline" size="icon" className="rounded-full">
            <Heart />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <ShoppingBagIcon />
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="rounded-full">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <img
                  src="logo.png"
                  alt="Logo"
                  className="h-16 w-16 mx-auto"
                />
              </SheetTitle>
            </SheetHeader>
             <div className="flex flex-col gap-6 mt-6">
            <Link href="Contact" className="text-sm font-normal">
                Contact 
              </Link>
              <Link href="About" className="text-sm font-normal">
                About
              </Link>
              <Link href="/" className="text-sm font-normal">
                Home
              </Link>
             
              <Link href="products" className="text-sm font-normal">
              Products
              </Link>
              
            </div>
            <div className="mt-4">
              <div className="relative">
                <Input
                  placeholder="Search"
                  className="bg-[#fbf7ef] rounded-full pl-4 pr-10"
                />
                <Search className="absolute right-3 top-2 text-gray-500" />
              </div>
            </div>
            <div className="mt-4 flex gap-4">
              <Button variant="outline" size="icon" className="rounded-full">
                <Heart />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <ShoppingBagIcon />
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}



