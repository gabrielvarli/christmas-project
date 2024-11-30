import { useState, useEffect } from "react";
import CountDownDetail from "./CountDownDetail";

type DateObject = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const Countdown: React.FC = () => {
  const targetDate = new Date("December 24, 2024 00:00:00").getTime();
  const [timeRemaining, setTimeRemaining] = useState<DateObject>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeRemaining = () => {
    const currentDate = Date.now();
    const distance = targetDate - currentDate;

    if (distance < 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    };
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  const { days, hours, minutes, seconds } = timeRemaining;

  return (
    <div className="flex flex-row gap-2 sm:gap-4 mb-4">
      <CountDownDetail content={days} text="Days" />
      <CountDownDetail content={hours} text="Hours" />
      <CountDownDetail content={minutes} text="Minutes" />
      <CountDownDetail content={seconds} text="Seconds" />
    </div>
  );
};

export default Countdown;
