"use client"; // Add this directive to mark the file as a client component

import Head from "next/head";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
import Link from "next/link";
import Upper from "../upper"; // Header Component
import Footer from "../footer"; // Footer Component

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    // Display a toast notification after successful login
    toast.success("Login Successful!", {
      position: "top-right",
      autoClose: 3000, // 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light", // Optional: "dark", "colored", etc.
    });
  };

  return (
    <>
      {/* Header Section */}
      <Upper />

      {/* Login Form Section */}
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Head>
          <title>Login</title>
          <meta name="description" content="Login Page" />
        </Head>

        <main className="flex-grow flex items-center justify-center py-8 px-4">
          {/* Login Form Layout */}
          <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg border border-gray-300">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
              Login
            </h1>
            <p className="text-center text-gray-600 text-sm mb-6">
              Please enter your email and password to access your account.
            </p>

            <form onSubmit={handleSubmit}>
              {/* Email Input */}
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Type your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-800"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-800"
                  required
                />
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition duration-200"
              >
                Log In
              </button>
            </form>

            <p className="text-sm text-center text-gray-600 mt-6">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="text-indigo-500 hover:underline">
                Register
              </Link>
            </p>
          </div>
        </main>

        {/* Footer Section */}
        <Footer />
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </>
  );
}
