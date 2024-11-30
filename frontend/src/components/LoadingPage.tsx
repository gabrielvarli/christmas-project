import React from "react";

type LoadingProps = {
  text: string;
};

const LoadingPage: React.FC<LoadingProps> = ({ text }) => {
  return (
    <aside className="flex flex-col items-center justify-center mt-20 space-y-6">
      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 animate-pulse">
        Laddar...
      </h2>

      {/* Loading Text */}
      <p className="text-gray-600 text-lg max-w-md text-center">{text}</p>

      {/* Animated Image */}
      <img
        src="/images/nissesdorr.png"
        alt="Loading"
        className="w-32 h-32 sm:w-40 sm:h-40 animate-bounce"
      />
    </aside>
  );
};

export default LoadingPage;
