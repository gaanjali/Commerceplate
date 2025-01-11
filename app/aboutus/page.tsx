"use client"; // For Next.js 13 App Router compatibility if needed
import { useState } from "react";
import Upper from "../upper"; // Importing the upper component
import Footer from "../footer"; // Importing the footer component

export default function AboutUs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Can I customize lamps for client projects?",
      answer: "Absolutely! Our lamps can be customized to meet your specific project requirements. Feel free to contact us for more details.",
    },
    {
      question: "Where are your lamps crafted?",
      answer: "Our lamps are meticulously crafted in our state-of-the-art facilities, ensuring the highest standards of quality and design.",
    },
    {
      question: "What's included in the 'free updates' policy?",
      answer: "Our free updates include design refinements, material upgrades, and extended warranty support for your peace of mind.",
    },
    {
      question: "Can I use your lamps for open-source projects?",
      answer: "Yes, our lamps can be used in open-source projects, provided proper credits are attributed as outlined in our terms.",
    },
    {
      question: "Can I retail themes featuring your lamps?",
      answer: "Absolutely! You can sell themes created with our lamps, providing stylish solutions for diverse design needs.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Upper />
      <div className="bg-gray-50 min-h-screen">
        {/* Heading */}
        <div className="py-16 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">About Us</h1>
        </div>

        <div className="container mt-12 mx-auto px-6 lg:px-20">
          {/* Who We Are Section */}
          <section className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 mb-20">
            <div className="lg:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Who We Are?</h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                At <span className="font-semibold">Commerceplate</span>, we illuminate your world with a curated collection of exceptional lighting solutions. Established with a passion for transforming spaces and creating ambiance, we stand as a beacon of quality and style in the realm of lighting.
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Committed to delivering excellence, we prioritize customer satisfaction and provide expert guidance to help you find the perfect lighting solution for any setting. Welcome to <span className="font-semibold">Commerceplate</span>, where light meets inspiration. Illuminate your world today!
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="relative w-full h-60 md:h-96">
                <img
                  src="./images/lamp 4.jpg" // Replace with your image path
                  alt="Who We Are"
                  className="rounded-lg shadow-lg object-cover w-full h-full"
                />
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="mb-20 px-4 lg:px-0">
            <h2 className="text-2xl md:text-3xl mt-8 md:mt-12 font-bold text-gray-800 mb-4">Our Company</h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              Welcome to <span className="font-semibold">Commerceplate</span>, where brilliance meets innovation. We take pride in being your ultimate destination for exquisite lighting solutions that illuminate spaces and lives alike. With a passion for creating luminous experiences, we curate a diverse range of cutting-edge light fixtures designed to elevate any environment.
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Our commitment to quality craftsmanship and a keen eye for aesthetic appeal ensures that each product we offer is not just a source of light, but a work of art in its own right. Elevate your space, embrace the light, only with Commerceplate.
            </p>
          </section>

          {/* Testimonials Section */}
          <section className="mb-20 px-4 lg:px-0">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">What Our Clients Say</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-lg">
                  <p className="text-gray-700 italic mb-4">
                    "Saastro SaaS Landingpage is an outstanding platform for businesses that want to showcase their software as a service (SaaS) solutions in an intuitive and visually appealing way."
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-6 h-6 text-gray-700"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 11c2.21 0 4-1.79 4-4S14.21 3 12 3 8 4.79 8 7s1.79 4 4 4zm0 2c-3.31 0-6 2.69-6 6 0 .34.03.67.08 1h11.84c.05-.33.08-.66.08-1 0-3.31-2.69-6-6-6z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-gray-800 font-medium">Marvin McKinney</h4>
                      <p className="text-sm text-gray-600">Web Designer</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Staff Section */}
          <section className="mb-20 px-4 lg:px-0">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">Our Staff</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Marvin McKinney", title: "Web Designer" },
                { name: "Noah Anderson", title: "Java Engineer" },
                { name: "Olivia Harper", title: "UI Designer" },
                { name: "Benjamin Clarke", title: "Product Marketer" },
              ].map((staff, i) => (
                <div key={i} className="text-center bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-12 h-12 text-gray-700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 11c2.21 0 4-1.79 4-4S14.21 3 12 3 8 4.79 8 7s1.79 4 4 4zm0 2c-3.31 0-6 2.69-6 6 0 .34.03.67.08 1h11.84c.05-.33.08-.66.08-1 0-3.31-2.69-6-6-6z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-gray-800 font-medium">{staff.name}</h4>
                  <p className="text-sm text-gray-600">{staff.title}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20 px-4 lg:px-0">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-base md:text-lg font-medium text-gray-800">{faq.question}</h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06-.02L10 10.292l3.71-3.102a.75.75 0 011.04 1.078l-4 3.333a.75.75 0 01-.96 0l-4-3.333a.75.75 0 01-.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  {openIndex === index && (
                    <p className="mt-4 text-gray-700 text-sm">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
