import Head from "next/head";
import Upper from "../upper"; // Importing the upper component
import Footer from "../footer"; // Importing the footer component

export default function PrivacyPolicy() {
  return (
    <>
      <Upper />
      <div className="min-h-screen bg-gray-50">
        <Head>
          <title>Privacy Policy</title>
          <meta name="description" content="Privacy Policy of Conclude" />
        </Head>

        <main className="max-w-7xl mx-auto p-6">
          {/* Main Heading */}
          <h1 className="text-4xl text-center mt-12 font-extrabold text-gray-800 mb-12">
            Privacy Policy
          </h1>

          {/* Subheading */}
          <h2 className="text-4xl font-semibold text-gray-800 mb-6 mt-10">
            This Privacy policy was published on 04 May 2023
          </h2>

          {/* GDPR Compliance Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              GDPR Compliance
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              We collect certain identifying personal data when you sign up to
              our Service such as your name, email address, PayPal address (if
              different from email address), and telephone number. The personal
              data we collect from you is disclosed only in accordance with our
              Terms of Service and/or this Privacy Policy.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Conclude collects Slack account and access information from Users
              for the purposes of connecting to the Slack API and to
              authenticate access to information on the Conclude website.
              Whenever you visit our Site, we may collect non-identifying
              information from you, such as referring URL, browser, operating
              system, cookie information, and Internet Service Provider.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              The term "personal data" does not include any anonymized and
              aggregated data made on the basis of personal data, which are
              wholly owned by Conclude.
            </p>
          </section>

          {/* About Commerceplate Section */}
          <section className="space-y-6 mt-10">
            <h2 className="text-2xl font-semibold text-gray-800">
              About Commerceplate
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              The discovery was made by Richard McClintock, a professor of Latin
              at Hampden-Sydney College in Virginia, who faced the impetuous
              recurrence of the dark word "consectetur" in the text Lorem ipsum.
              He researched its origins to identify them in sections 1.10.32 and
              1.10.33 of the aforementioned Cicero's writings.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              When referring to Lorem ipsum, different expressions are used,
              namely "fill text," "fictitious text," "blind text," or
              "placeholder text." In short, its meaning can also be zero, but
              its usefulness is so clear as to be widely adopted for design and
              layout purposes.
            </p>
          </section>

          {/* Company Liability Section */}
          <section className="space-y-6 mt-10">
            <h2 className="text-2xl font-semibold text-gray-800">
              Company Liability
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              The choice of font and font size with which Lorem ipsum is
              reproduced answers to specific needs that go beyond the simple and
              simple filling of spaces dedicated to accepting real texts and
              allowing to have hands an advertising/publishing product, both web
              and paper, true to reality.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas
              sit, aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores.
            </p>
          </section>

          {/* Data Collection Section */}
          <section className="space-y-6 mt-10">
            <h2 className="text-2xl font-semibold text-gray-800">
              When We Collect Personal Data
            </h2>
            <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed">
              <li>Enhance or improve User experience, our Site, or our Service.</li>
              <li>Send emails and updates about Conclude and process transactions.</li>
              <li>Send emails about our Site or respond to inquiries.</li>
              <li>
                Including news and requests for agreement to amended legal
                documents such as this Privacy Policy and our Terms of Service.
              </li>
            </ul>
          </section>

          {/* Type of Personal Data Collected Section */}
          <section className="space-y-6 mt-10">
            <h2 className="text-2xl font-semibold text-gray-800">
              Type of Personal Data Collected
            </h2>
            <p className="text-base text-gray-700 mt-2  mb-12 leading-relaxed">
              Your information may be transferred to — and maintained on —
              computers located outside of your state, province, country or
              other governmental jurisdiction where the privacy laws may not be
              as protective as those in your jurisdiction. If you choose to
              provide information to us, Conclude transfers Personal Information
              to Google Cloud Platform and processes it there. Your consent to
              this Privacy Policy followed by your submission of such
              information represents your agreement to that transfer.
            </p>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
