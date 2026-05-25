import { FiSend } from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      {/* Top Section */}
      <div className="max-w-[1500px] mx-auto px-6 lg:px-20 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
        
        {/* Brand */}
        <div className="lg:pr-8">
          <h2 className="text-3xl font-bold mb-5 tracking-wide">
            Tryloom
          </h2>

          <p className="text-gray-400 leading-7 text-sm mb-6">
            Premium fashion designed for modern lifestyles.
            Discover elegant collections crafted with comfort,
            quality, and timeless style.
          </p>

          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="p-2.5 rounded-full bg-white/10 hover:bg-white hover:text-black transition-colors duration-300">
              <FaFacebookF size={16} />
            </a>

            <a href="#" aria-label="Instagram" className="p-2.5 rounded-full bg-white/10 hover:bg-white hover:text-black transition-colors duration-300">
              <FaInstagram size={16} />
            </a>

            <a href="#" aria-label="Twitter" className="p-2.5 rounded-full bg-white/10 hover:bg-white hover:text-black transition-colors duration-300">
              <FaTwitter size={16} />
            </a>

            <a href="#" aria-label="LinkedIn" className="p-2.5 rounded-full bg-white/10 hover:bg-white hover:text-black transition-colors duration-300">
              <FaLinkedinIn size={16} />
            </a>
          </div>
        </div>

        {/* Shop */}
        <div>
          <h3 className="text-lg font-semibold mb-5">Shop</h3>

          <ul className="space-y-4 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Women</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Men</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
            <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-5">Support</h3>

          <ul className="space-y-4 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
            <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-5">
            Subscribe
          </h3>

          <p className="text-gray-400 text-sm leading-7 mb-5">
            Get updates on new collections, exclusive offers,
            and seasonal launches.
          </p>

          {/* Fixed Input/Button alignment to stretch perfectly */}
          <div className="flex bg-white/10 rounded-full overflow-hidden focus-within:ring-1 focus-within:ring-gray-400 transition-shadow">
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent px-5 py-3.5 w-full text-sm outline-none placeholder:text-gray-500"
            />

            <button 
              type="button"
              aria-label="Subscribe"
              className="px-6 hover:bg-white hover:text-black transition-colors flex items-center justify-center"
            >
              <FiSend size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-20 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          
          <p>
            © {new Date().getFullYear()} Tryloom. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}