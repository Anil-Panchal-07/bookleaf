"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import LoginModal from "../modals/LoginModal";

export default function Navbar() {
  const [token,setToken] = useState("")
  const [open,setOpen]=useState(false)



  useEffect(()=>{
    const token = localStorage.getItem("token")
    if (token){
      setToken(token)  
    }
  },[])


  return (
    <nav className="sticky top-0 z-60 bg-[#FAF7F2] border-b border-gray-200">
      <div className="max-w-[108rem] mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-[#2F4F4F]">
          <img src='/logo1.png' className="w-full h-20 p-1"/>
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
        {
  !token ? (
    <button
     
      className="text-gray-700 hover:text-[#2F4F4F]"
    onClick={()=>setOpen(true)}

    >
      Login
    </button>
  ) : (
    <Link href="/user">
      <FaUserCircle
        size={28}
        className="text-[#556B2F] hover:scale-110 transition"
      />
    </Link>
  )
}
{open && <LoginModal onClose={()=>setOpen(false)} />}



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
