// Navbar.jsx

import { Search, Heart, ShoppingBag, Menu } from "lucide-react";
import Button from "@components/common/Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-[1500px] mx-auto px-6 lg:px-20 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="text-3xl font-bold tracking-wide text-black cursor-pointer">
          Tryloom
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-10 text-[15px] font-medium text-gray-700">
          <li className="hover:text-black cursor-pointer transition">Home</li>
          <li className="hover:text-black cursor-pointer transition">Shop</li>
          <li className="hover:text-black cursor-pointer transition">New Arrivals</li>
          <li className="hover:text-black cursor-pointer transition">Collections</li>
          <li className="hover:text-black cursor-pointer transition">Contact</li>
        </ul>

        {/* Right Icons */}
        <div className="hidden lg:flex items-center gap-5">
          <button className="hover:text-black text-gray-700 transition">
            <Search size={20} />
          </button>

          <button className="hover:text-black text-gray-700 transition relative">
            <Heart size={20} />
            <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              2
            </span>
          </button>

          <button className="hover:text-black text-gray-700 transition relative">
            <ShoppingBag size={20} />
            <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              3
            </span>
          </button>

          <Button size="sm" variant="primary">
            Login
          </Button>
        </div>

        {/* Mobile Menu */}
        <button className="lg:hidden text-black">
          <Menu size={26} />
        </button>
      </nav>
    </header>
  );
}