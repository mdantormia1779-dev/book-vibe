import React from "react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-10 text-center text-white max-w-md w-full">
        
        {/* 404 Text */}
        <h1 className="text-8xl font-extrabold mb-4 tracking-widest">
          404
        </h1>

        {/* Message */}
        <p className="text-lg mb-6">
          Oops! Page not found 😢
        </p>

        <p className="text-sm opacity-80 mb-8">
          The page you're looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <a
          href="/"
          className="inline-block px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
        >
          Go Home
        </a>

        {/* Decorative line */}
        <div className="mt-6 border-t border-white/30 pt-4 text-xs opacity-70">
          Error Code: 404
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;