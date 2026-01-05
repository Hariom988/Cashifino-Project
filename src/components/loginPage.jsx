"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import LoginImage from "../../public/login-image.svg";
import Link from "next/link";

const LoginForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const user = users.find((u) => u.email === formData.email);

      if (user && user.password === formData.password) {
        localStorage.setItem(
          "currentUser",
          JSON.stringify({
            email: user.email,
            name: user.name,
          })
        );
        window.dispatchEvent(new Event("userLogin")); // Add this line
        console.log("Login successful");
        router.push("/");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred during login");
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      console.log("Google user info:", decoded);

      const googleUser = {
        email: decoded.email,
        name: decoded.name,
        picture: decoded.picture,
        googleId: decoded.sub,
      };

      localStorage.setItem("currentUser", JSON.stringify(googleUser));
      window.dispatchEvent(new Event("userLogin"));
      console.log("Google login successful");
      router.push("/");
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const existingUser = users.find((u) => u.email === decoded.email);

      if (!existingUser) {
        users.push(googleUser);
        localStorage.setItem("users", JSON.stringify(users));
      }

      console.log("Google login successful");
      alert(`Welcome ${decoded.name}!`);
      router.push("/"); // Home page pe redirect
    } catch (error) {
      console.error("Google login error:", error);
      alert("Google login failed");
    }
  };

  const handleGoogleError = () => {
    console.log("Google Login Failed");
    alert("Google login failed. Please try again.");
  };

  return (
    <div className="min-h-content bg-white flex items-center justify-between p-8">
      <div className="w-full mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="hidden md:flex max-w-1/2 flex-1 items-center justify-center">
            <img
              src={LoginImage.src}
              alt="Login illustration"
              className="w-full -ml-5 max-w-md object-contain"
            />
          </div>

          <div className="flex-1 pr-5 w-full max-w-full mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-4xl font-bold text-green-600 mb-2">
                Welcome Back
              </h1>
              <p className="text-gray-400 text-xs uppercase tracking-widest">
                Login to continue
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-normal text-gray-900 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Example@gmail.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-green-500 focus:border-green-500 outline-none transition text-sm"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-normal text-gray-900 mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-green-500 focus:border-green-500 outline-none transition pr-12 text-sm"
                    autoComplete="current-password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? (
                      <FiEyeOff size={18} />
                    ) : (
                      <FiEye size={18} />
                    )}
                  </button>
                </div>
              </div>

              <div className="text-right">
                <Link
                  href="/forgot-password"
                  className="text-xs text-gray-400 hover:text-green-600 transition"
                >
                  Forget Password ?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full hover:cursor-pointer bg-green-600 hover:bg-green-700 text-white font-semibold text-sm py-3 rounded-md transition duration-200"
              >
                LOGIN
              </button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="flex justify-center">
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={handleGoogleError}
                useOneTap
                theme="outline"
                size="large"
                text="continue_with"
                shape="rectangular"
                width="350"
              />
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-500 text-sm">
                NEW USER ?{" "}
                <Link
                  href="/register"
                  className="text-green-600 hover:text-green-700 font-semibold transition"
                >
                  SIGN UP
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
