"use client";
import { useEffect, useState } from "react";
import { FaBookOpen, FaPlus, FaUser } from "react-icons/fa";
import toast from "react-hot-toast";
import { BASE_URL } from "@/_apis/baseurl";
import { useRouter } from "next/navigation";

const UserDashboard = () => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();


  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      console.log(token)

      if (!token) {
        toast.error("Please login first");
        window.location.href = "/login";
        return;
      }

      try {
        const res = await fetch(`${BASE_URL}/api/auth/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        console.log(data)

        if (!res.ok) {
          throw new Error(data.error);
        }

        setUser(data);
      } catch (err) {
        toast.error("Session expired, login again");
        // localStorage.removeItem("token");
        // window.location.href = "/login";
        console.log(err)
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

const handleLogout = () => {
  localStorage.removeItem("token");
  toast.success("Logout Successfully");

  setTimeout(() => {
    router.push("/");
  }, 800);
};


  if (loading) {
    return <p className="text-center mt-20">Loading...</p>;
  }
  return (
    <div className="min-h-screen bg-[#F5EFE6] px-12 pb-8 py-2">
      <div className="max-w-[108rem] mx-auto space-y-2">

        {/* Header */}
        <div className="bg-white text-center rounded-2xl p-6 shadow-sm">
          <h1 className="text-3xl font-semibold text-[#3E2F24]">
            User Dashboard
          </h1>
          <p className="text-[#6B4F3F]">
            Manage your profile and books for sale
          </p>
        </div>

        {/* Profile Section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col md:flex-row gap-8 items-center">
          <img
            src="https://i.pravatar.cc/150?img=3"
            className="w-28 h-28 rounded-full"
          />

          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-[#3E2F24]">
              {user?.fullname}
            </h2>

            <p className="text-[#6B4F3F]">
              {user?.email}
            </p>
            <button
            onClick={handleLogout}
            
            className="bg-red-500 cursor-pointer text-white mt-2 font-semibold text-[.85rem] rounded-3xl p-1 px-4 ">
              Logout 
            </button>

            {/* <p className="text-[#6B4F3F] mt-1">
              Member since:
              <span className="font-medium">
                {new Date(user?.created_at).getFullYear()}
              </span>
            </p> */}

          </div>

          <button className="px-6 py-3 rounded-xl bg-[#556B2F] text-white hover:opacity-90">
            Edit Profile
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <StatCard title="Books Listed" value="5" icon={<FaBookOpen />} />
          <StatCard title="Books Sold" value="2" icon={<FaBookOpen />} />
          <StatCard title="Profile Views" value="23" icon={<FaUser />} />
        </div>

        {/* Add Book */}
        <div className="bg-white rounded-2xl p-6 shadow-sm flex justify-between items-center">
          <h2 className="text-xl font-semibold text-[#3E2F24]">
            Your Books for Sale
          </h2>

          <button className="flex items-center gap-2 px-5 py-2 rounded-xl bg-[#3E2F24] text-white hover:bg-[#2C1F16]">
            <FaPlus /> Add New Book
          </button>
        </div>

        {/* User Books */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-[#FAF7F2] rounded-2xl shadow-md p-4 hover:shadow-lg transition"
            >
              <img
                src="https://covers.openlibrary.org/b/id/8231856-L.jpg"
                className="rounded-xl h-48 w-full object-cover mb-3"
              />

              <h3 className="text-sm font-semibold text-[#3E2F24]">
                Pride and Prejudice
              </h3>

              <p className="text-xs text-[#6B4F3F] mb-2">
                Jane Austen
              </p>

              <span className="inline-block text-xs px-3 py-1 rounded-full bg-[#556B2F] text-white">
                Available
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon }) => (
  <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
    <div className="text-3xl text-[#556B2F] mb-2 mx-auto">
      {icon}
    </div>
    <p className="text-2xl font-semibold text-[#3E2F24]">
      {value}
    </p>
    <p className="text-sm text-[#6B4F3F]">
      {title}
    </p>
  </div>
);

export default UserDashboard;
