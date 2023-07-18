import { useEffect, useState } from "react";

export const Countdown = ({ targetDate }) => {
  const isClient = typeof window !== "undefined"; // Memeriksa apakah kode berjalan di lingkungan klien
  const [client, setClient] = useState(false);

  const countDownDate = new Date(targetDate).getTime();
  const [countDown, setCountDown] = useState(
    isClient ? countDownDate - new Date().getTime() : 0
  ); // Pastikan inisialisasi awal hanya terjadi di lingkungan klien

  useEffect(() => {
    setClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const interval = setInterval(() => {
        setCountDown(countDownDate - new Date().getTime());
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [countDownDate, isClient]);

  if (!client) {
    return <p>loading...</p>;
  }

  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return (
    <div>
      <p>
        {days} days, {hours} hours, {minutes} minutes, {seconds} seconds
      </p>
    </div>
  );
};
