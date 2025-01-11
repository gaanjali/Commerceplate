"use client"; // Add this directive to mark the file as a client component

import Head from "next/head";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
import Upper from "../upper"; // Header Component
import Footer from "../footer"; // Footer Component

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      toast.error("You must agree to the Terms & Conditions to register.", {
        position: "top-right",
      });
      return;
    }
    toast.success("You have successfully signed up!", {
      position: "top-right",
    });
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <>
      {/* Header Section */}
      <Upper />

      {/* Register Form Section */}
      <div className="flex flex-col min-h-screen">
        <Head>
          <title>Create an Account</title>
          <meta name="description" content="Register Page" />
        </Head>

        <main className="flex-grow flex items-center justify-center bg-gray-100">
          <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg border border-gray-300">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
              Create an Account
            </h1>
            <p className="text-center text-gray-600 text-sm mb-6">
              Create an account and start using...
            </p>

            <form onSubmit={handleSubmit}>
              {/* Name Input */}
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-800"
                  required
                />
              </div>

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
              <div className="mb-5">
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

              {/* Terms & Conditions Checkbox */}
              <div className="mb-6 flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  required
                />
                <label
                  htmlFor="terms"
                  className="ml-2 text-sm text-gray-600"
                >
                  I have read and agree to the{" "}
                  <a
                    href="/terms"
                    className="text-indigo-500 hover:underline"
                  >
                    Terms & Conditions
                  </a>
                </label>
              </div>

              {/* Register Button */}
              <button
                type="submit"
                className="w-full py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition duration-200"
              >
                Sign Up
              </button>
            </form>

            {/* Login Link */}
            <p className="text-sm text-center text-gray-600 mt-6">
              Have an account?{" "}
              <a href="/login" className="text-indigo-500 hover:underline">
                Login
              </a>
            </p>
          </div>
        </main>

        {/* Footer Section */}
        <Footer />
      </div>

      {/* Toast Notifications */}
      <ToastContainer />
    </>
  );
}
