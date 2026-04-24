import HelpForm from '../../components/forms/HelpForm';
import helpImg from '../../assets/help.png';

export default function Help() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* --- Hero Section --- */}
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="md:w-1/2 space-y-6">
            <p className='text-6xl text-purple-500 font-bold mb-4 '>Need Help!!</p>
            <p className='text-3xl text-purple-400 '>We're here for you, 24/7.</p>

            <p className="text-lg text-gray-600">
              Our dedicated support team is ready to assist you with any questions,
              issues, or feedback you may have. Explore our resources or reach out directly.
            </p>

            {/* Direct Contact Links */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="tel:9310365061"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150"
              >
                Call Us: 9310365061
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:support@yourcompany.com" // Replace with your actual support email
                className="inline-flex items-center px-6 py-3 border border-indigo-600 text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 transition duration-150"
              >
                Email Support
              </a>
            </div>
          </div>

          {/* Image */}
          <img className='h-1/2 w-1/2' src={helpImg} alt="Professional support representative ready to help" />

        </div>
      </div>

      {/* --- Quick Links / Social Media Section --- */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">
            Find Us on Social Media
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {/* LinkedIn */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/vishesh-b8a2b72a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm"
              className="w-48 text-center py-3 font-semibold rounded-lg shadow-lg text-sky-700 bg-sky-100 hover:bg-sky-200 transition duration-150"
            >
              LinkedIn
            </a>
            {/* Facebook */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com"
              className="w-48 text-center py-3 font-semibold rounded-lg shadow-lg text-blue-700 bg-blue-100 hover:bg-blue-200 transition duration-150"
            >
              Facebook
            </a>
            {/* Instagram */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/sayme_vishesh/"
              className="w-48 text-center py-3 font-semibold rounded-lg shadow-lg text-pink-700 bg-pink-100 hover:bg-pink-200 transition duration-150"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* --- Frequently Asked Questions (FAQ) Section --- */}
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
          FAQs
        </h2>
        <dl className="space-y-6">
          {/* FAQ Item 1 */}
          <div>
            <dt className="text-lg leading-6 font-medium text-gray-900">
              How do I reset my password?
            </dt>
            <dd className="mt-2 text-base text-gray-600">
              Click the "Forgot Password" link on the login page. We'll send a password reset link to the email associated with your account. If you don't receive it, please check your spam folder.
            </dd>
          </div>

          {/* FAQ Item 2 */}
          <div>
            <dt className="text-lg leading-6 font-medium text-gray-900">
              What payment methods do you accept?
            </dt>
            <dd className="mt-2 text-base text-gray-600">
              We currently accept all major credit cards (Visa, Mastercard, Amex), PayPal, and Apple Pay. For corporate accounts, bank transfers may also be an option.
            </dd>
          </div>

          {/* FAQ Item 3 */}
          <div>
            <dt className="text-lg leading-6 font-medium text-gray-900">
              Where can I find my order history?
            </dt>
            <dd className="mt-2 text-base text-gray-600">
              You can view your complete order history by navigating to the "Account Settings" section and selecting "Order History" from the sidebar menu.
            </dd>
          </div>
        </dl>
        <div className="text-center mt-10">
          <p className="text-lg text-gray-600">
            Didn't find your answer? Scroll down for direct support.
          </p>
        </div>
      </div>

      {/* --- Support Form (Simulated) Section --- */}
      <HelpForm />

    </div>
  );
}