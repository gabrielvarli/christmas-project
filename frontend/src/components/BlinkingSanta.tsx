import React, { useState, useEffect } from "react";

const BlinkingSanta: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 500); // Ändra intervallet efter behov

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-80 w-auto">
      {isVisible && (
        <video
          src="/videos/Santa-Eye-Blink.mp4"
          autoPlay
          loop
          muted
          className="h-full w-auto"
        />
      )}
    </div>
  );
};

export default BlinkingSanta;
