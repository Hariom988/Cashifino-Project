"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (!currentUser) {
      router.push("/login");
    } else {
      setUser(JSON.parse(currentUser));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md transition"
          >
            Logout
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            {user.picture && (
              <img
                src={user.picture}
                alt={user.name}
                className="w-20 h-20 rounded-full border-2 border-green-500"
              />
            )}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Welcome, {user.name}!
              </h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-md">
            <p className="text-green-800 font-medium">
              ✅ You have successfully logged in with Google OAuth!
            </p>
          </div>

          {/* Quick Links */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <button
              onClick={() => navigate("/")}
              className="p-4 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg transition"
            >
              <p className="font-semibold text-blue-800">Go to Home</p>
            </button>
            <button
              onClick={() => navigate("/all-product")}
              className="p-4 bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-lg transition"
            >
              <p className="font-semibold text-purple-800">View Products</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
