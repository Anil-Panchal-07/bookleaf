"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-60 bg-[#FAF7F2] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-[#2F4F4F]">
            bookleaf
          </Link>

          {/* Center Links */}
          <div className="hidden md:flex gap-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-[#2F4F4F] transition"
            >
              Home
            </Link>
            <Link
              href="/books"
              className="text-gray-700 hover:text-[#2F4F4F] transition"
            >
              Browse
            </Link>
            <Link
              href="/seller/add-book"
              className="text-gray-700 hover:text-[#2F4F4F] transition"
            >
              Sell Books
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-gray-700 hover:text-[#2F4F4F]"
            >
              Login
            </Link>

            <Link
              href="/cart"
              className="relative text-gray-700 hover:text-[#2F4F4F]"
            >
              🛒
              <span className="absolute -top-2 -right-2 bg-[#8B5E3C] text-white text-xs px-1.5 rounded-full">
                2
              </span>
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}
