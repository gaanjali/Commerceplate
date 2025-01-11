export default function ErrorPage() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        {/* Icon */}
        <div className="bg-red-100 text-red-500 p-4 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-16 h-16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m0 4h.01m-6.938-6.938a9 9 0 1112.727 0 9 9 0 01-12.727 0z"
            />
          </svg>
        </div>
  
        {/* Message */}
        <h1 className="text-4xl font-bold mt-6 text-gray-800">404 - Page Not Found</h1>
        <p className="text-gray-600 mt-4 text-center px-4">
          Oops! The page you're looking for doesn't exist or may have been moved.
        </p>
  
        {/* Back to Home Button */}
        <a
          href="/"
          className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Back to Home
        </a>
      </div>
    );
  }
  