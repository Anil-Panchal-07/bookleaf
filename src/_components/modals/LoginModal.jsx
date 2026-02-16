"use client";
import { useState } from "react";
import { BASE_URL } from "@/_apis/baseurl";
import toast from "react-hot-toast";
import { FaLeaf } from "react-icons/fa";

export default function LoginModal({ onClose }) {
    const [isSignup, setIsSignup] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

     //-------------------------------------------------
    //              HANDLE REGISTER
    //------------------------------------------------



    const handleRegister = async () => {
        setLoading(true)

        const res = await fetch(`${BASE_URL}/api/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                fullname: name,
                email,
                password,
            }),
        })
        
        const data = await res.json()

        console.log("Registered user data", data);

        setLoading(false)

        if (!res.ok) {
            alert(data.error)
            return
        }

        toast.success("Registered successfully ! ")
        setIsSignup(false);


    }


    //-------------------------------------------------
    //              HANDLE LOGIN
    //------------------------------------------------


    const handleLogin = async () => {

        setLoading(true)

        const res = await fetch(`${BASE_URL}/api/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email,
                password,
            }),
        })

        const data = await res.json()

        setLoading(false)

        if (!res.ok) {
            alert(data.error)
            return
        }
        localStorage.setItem("token", data.token)

        toast.success("Login successfully ! ")

onClose();
window.location.assign("/user");
        console.log("Login data", data);
    }



    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50 animate-fadeIn">
  <div className="relative w-full max-w-md mx-4 rounded-3xl shadow-2xl border border-[#E8DFC8] bg-gradient-to-br from-[#FAF7F2] to-[#F3ECE3] p-8">

    {/* Close */}
    <button
      onClick={onClose}
      className="absolute top-4 right-4 text-[#6B4F3F] hover:text-[#3E2F24] text-xl transition"
    >
      ✕
    </button>

    {/* Header */}
    <div className="flex flex-col items-center text-center mb-7">
      <div className=" p-4 rounded-full ">
      <img src="/logo.png" className="w-20"/>
      </div>

      <h2 className="mt-4 text-3xl font-semibold text-[#3E2F24] tracking-tight">
        {isSignup ? "Join BookLeaf" : "Welcome Back"}
      </h2>

      <p className="text-sm text-[#7A5C49] mt-1">
        {isSignup
          ? "Create your account to start your reading journey"
          : "Login to access your library"}
      </p>
    </div>

    {/* Inputs */}
  <form
  onSubmit={(e) => {
    e.preventDefault();
    isSignup ? handleRegister() : handleLogin();
  }}
  className="space-y-4"
>

  {isSignup && (
    <input
      type="text"
      placeholder="Full name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="w-full rounded-xl border border-[#D8CFC4] bg-white px-4 py-3 text-[#3E2F24] placeholder-[#A18872] focus:outline-none focus:ring-2 focus:ring-[#556B2F]/40 transition"
    />
  )}

  <input
    type="email"
    placeholder="Email address"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="w-full rounded-xl border border-[#D8CFC4] bg-white px-4 py-3 text-[#3E2F24] placeholder-[#A18872] focus:outline-none focus:ring-2 focus:ring-[#556B2F]/40 transition"
  />

  <input
    type="password"
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className="w-full rounded-xl border border-[#D8CFC4] bg-white px-4 py-3 text-[#3E2F24] placeholder-[#A18872] focus:outline-none focus:ring-2 focus:ring-[#556B2F]/40 transition"
  />

  <button
    type="submit"
    disabled={loading}
    className="w-full mt-2 py-3 rounded-xl bg-[#556B2F] text-white font-medium tracking-wide hover:bg-[#4A5F28] active:scale-[0.98] transition-all shadow-md"
  >
    {loading ? "Please wait..." : isSignup ? "Create Account" : "Login"}
  </button>

</form>

    {/* Switch */}
    <p className="text-center mt-5 text-sm text-[#7A5C49]">
      {isSignup ? "Already have an account?" : "New here?"}

      <button
        onClick={() => setIsSignup(!isSignup)}
        className="ml-2 font-medium text-[#556B2F] hover:underline"
      >
        {isSignup ? "Login" : "Create account"}
      </button>
    </p>

    {/* subtle divider */}
    <div className="mt-6 h-[1px] bg-[#E8DFC8]" />

    <p className="text-xs text-center text-[#9C7C63] mt-3">
      Secure authentication powered by BookLeaf
    </p>
  </div>
</div>

    );
}
