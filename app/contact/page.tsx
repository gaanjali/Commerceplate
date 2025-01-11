"use client";
import React, { useState } from "react";
import Head from "next/head";
import Upper from "../upper"; // Header Component
import Footer from "../footer"; // Footer Component
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error for the field being updated
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validation
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Show success toast in top-right corner
      toast.success("Message sent successfully!", {
        position: "top-right",  // Change position to top-right
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
  
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <>
      {/* Header Section */}
      <Upper />
      <ToastContainer />
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact page for getting in touch with us" />
      </Head>
      {/* Rest of your JSX */}

      <h1 className="text-5xl font-bold text-center text-gray-800 mt-20">Connect with Us</h1>

      <main className="min-h-screen bg-gray-50">
        {/* Contact Information Blocks */}
        <section className="max-w-7xl mt-12 mx-auto py-12 px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Address Block */}
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-800">Address</h2>
              <p className="text-base text-gray-700 mt-2">
                123 Main Street, Pune,
                <br />
                CA 12345 - India
              </p>
            </div>
            {/* Email Block */}
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-800">Email</h2>
              <p className="text-base text-gray-700 mt-2">
                <a href="mailto:yourmail@domain.com" className="text-blue-600 hover:underline">
                  yourmail@domain.com
                </a>
                <br />
                <a href="mailto:support@roadthemes.com" className="text-blue-600 hover:underline">
                  support@roadthemes.com
                </a>
              </p>
            </div>
            {/* Phone Block */}
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-800">Phone</h2>
              <p className="text-base text-gray-700 mt-2">
                Mobile: +91,1234567890
                <br />
                Hotline: 1009 678 456
              </p>
            </div>
            {/* Shop Time Block */}
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-800">Shop Time</h2>
              <p className="text-base text-gray-700 mt-2">Available at 10am-8pm</p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="max-w-4xl mt-10 mx-auto py-12 px-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            We would love to hear from you!
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  className={`mt-1 block w-full p-3 border ${
                    errors.firstName ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                />
                {errors.firstName && (
                  <p className="text-sm text-red-500 mt-1">{errors.firstName}</p>
                )}
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john.doe@email.com"
                className={`mt-1 block w-full p-3 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
              />
              {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enquiry About"
                className={`mt-1 block w-full p-3 border ${
                  errors.subject ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
              />
              {errors.subject && <p className="text-sm text-red-500 mt-1">{errors.subject}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message..."
                rows={4}
                className={`mt-1 block w-full p-3 border ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
              ></textarea>
              {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
