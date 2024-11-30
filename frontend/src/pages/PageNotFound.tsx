const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="font-bold text-6xl text-red-500">404</h1>
        <h2 className="text-2xl mt-4 text-gray-800">Oops! Page not found.</h2>
        <p className="mt-2 text-gray-600">
          The page you are looking for does not exist or has been moved.
        </p>
      </div>
      <div className="mt-8">
        {/* Video component for blinking Santa */}
        <video
          src="/videos/Santa-eye-blink.mp4"
          autoPlay
          loop
          muted
          className="w-64 h-64 rounded-lg shadow-lg"
        />
        <p className="mt-4 text-center text-gray-700">
          Don’t worry! Santa is still spreading joy! 🎅
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
