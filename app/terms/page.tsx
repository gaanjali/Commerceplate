"use client";
import Head from "next/head";
import Upper from "../upper"; // Importing the upper component
import Footer from "../footer"; // Importing the footer component
import Link from "next/link";

export default function TermsOfService() {
  return (
    <>
      <Upper />
      <div className="min-h-screen bg-gray-50">
        <Head>
          <title>Terms of Service</title>
          <meta name="description" content="Terms of Service for Onlinelightshop" />
        </Head>

        <main className="max-w-7xl mx-auto p-6">
          {/* Main Heading */}
          <h1 className="text-4xl text-center mt-12 font-extrabold text-gray-800 mb-12">
            Terms of Service
          </h1>

          {/* Subheading */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Commerceplate Solutions License Agreement
          </h2>

          {/* Sections */}
          <section className="space-y-6">
            <p className="text-base text-gray-700 leading-relaxed">
              Your Rights: Roxboro Lighting Limited, trading as Onlinelightshop, is a UK-based company and complies with UK consumer law, including the Distance Selling Regulations. This means that shopping with Onlinelightshop is safe. With 30 years of experience in lighting retailing, we aim to provide a thorough and reliable service. You’ll get your items delivered, and we’ll sort out any problems you have. Our Terms and Conditions do not affect your statutory rights.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Distance Selling Regulations give you the right to cancel an order and return any goods that may already have been dispatched (see Returns for Refund) up to 7 days from receipt. Our returns policy allows for 21 days.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
  <a 
    href="/returns-form.pdf" 
    download 
    className="text-blue-600 hover:underline"
  >
    Download our Returns Form here
  </a>
</p>

          </section>

          {/* Sales Terms and Conditions */}
          <section className="space-y-6 mt-10">
            <h2 className="text-2xl font-semibold text-gray-800">Sales Terms and Conditions</h2>
            <h3 className="text-lg font-semibold text-gray-700 mt-4">Pricing</h3>
            <p className="text-base text-gray-700 leading-relaxed">
              Prices include VAT (Value Added Tax) at the standard UK rate of 20%. VAT does not apply to orders shipped outside the E.U. or to Tax-Free areas such as the Channel Islands. These areas will be priced and billed with VAT deducted. Prices on the site are shown including VAT.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              If you select a currency or delivery country outside the E.U., prices will be displayed VAT-free. For example, an item that costs 19.99 GBP will be shown and billed as 17.00 GBP when it is VAT-free.
            </p>

            <h3 className="text-lg font-semibold text-gray-700 mt-4">Payment</h3>
            <p className="text-base text-gray-700 leading-relaxed">
              Onlinelightshop accepts most major credit cards for online orders. You will be asked to enter your card details and the name and address of the cardholder when placing an order. If there is any discrepancy with the details, we may hold your order until we receive the correct information.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              For offline orders, Onlinelightshop accepts (£) Sterling Postal Orders, Personal Cheques, (£) Sterling Bank Drafts, and (£) Sterling Bank Transfers. We recommend that you do not send cash through the post.
            </p>
          </section>

          {/* Product Availability Section */}
          <section className="space-y-6 mt-10">
            <h3 className="text-lg font-semibold text-gray-700">Product Availability</h3>
            <p className="text-base text-gray-700 leading-relaxed">
              Onlinelightshop endeavors to carry most of the items displayed on the site in stock. If an item you order is out of stock, we will contact you with a due date. You may then choose to cancel the order or wait for the item to become available.
            </p>
          </section>

          {/* Credit Card Security */}
          <section className="space-y-6 mt-10">
            <h3 className="text-lg font-semibold text-gray-700">Credit Card Security</h3>
            <p className="text-base text-gray-700 leading-relaxed">
              We take online security very seriously and have implemented several measures to ensure your payment information is processed securely. We use Sagepay, a world leader in secure online payments, and SSL encryption technology to protect your information.
            </p>
          </section>

          {/* Warranty */}
          <section className="space-y-6 mt-10">
            <h3 className="text-lg font-semibold text-gray-700">Warranty</h3>
            <p className="text-base text-gray-700 leading-relaxed">
              The Seller warrants that goods will match the description provided at the time of dispatch. After 7 working days from delivery, goods will either be repaired or replaced depending on the nature of the fault.
            </p>
          </section>

          {/* Delivery */}
          <section className="space-y-6 mt-10">
            <h3 className="text-lg font-semibold text-gray-700">Delivery</h3>
            <p className="text-base text-gray-700 leading-relaxed">
              Goods supplied within the UK will normally be delivered within 3-5 working days of order acceptance. Where a specific delivery date cannot be met, the buyer will be notified and given the opportunity to agree on a new delivery date or cancel the order.
            </p>
          </section>

          {/* Cancellation and Return */}
          <section className="space-y-6 mt-10">
            <h3 className="text-lg font-semibold text-gray-700">Cancellation and Return</h3>
            <p className="text-base text-gray-700 leading-relaxed">
              The buyer must inspect goods immediately upon receipt and notify the Seller within 7 working days if goods are damaged or do not meet the terms of the contract. If the buyer does not do so, the goods will be considered accepted.
            </p>
          </section>

          {/* Agreement Notice */}
          <section className="text-center mt-12">
            <p className="text-base text-gray-700">
              By using our service, you agree to our{" "}
              <Link href="terms" className="text-blue-600 hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="privacy" className="text-blue-600 hover:underline">
                Privacy Policy
              </Link>.
            </p>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
