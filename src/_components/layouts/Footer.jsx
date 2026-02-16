import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#FAF7F2] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
             <img src='/logo1.png' className="w-50  p-1"/>
            <p className="text-gray-600 text-sm">
              Where old books find new readers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3 text-[#2F4F4F]">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/books">Browse Books</Link></li>
              <li><Link href="/seller/add-book">Sell Books</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-3 text-[#2F4F4F]">
              Support
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-3 text-[#2F4F4F]">
              Follow Us
            </h3>
            <div className="flex gap-4 text-gray-600 text-lg">
              <span className="cursor-pointer hover:text-[#2F4F4F]">🐦</span>
              <span className="cursor-pointer hover:text-[#2F4F4F]">📸</span>
              <span className="cursor-pointer hover:text-[#2F4F4F]">📘</span>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} bookleaf. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
