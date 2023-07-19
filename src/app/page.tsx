"use client";
import Image from "next/image";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const handleButtonClick = async () => {
    if (isLoading) return;
    setIsLoading(true);
    async function sendVote() {
      const response = await fetch("/api/vote");
      const data = await response.json();
      console.log("Data: ", data);
      toast.success("Thanks for voting! 🎉");
      setIsLoading(false);
    }

    await sendVote();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-full w-40 h-40 flex items-center justify-center shadow-lg">
        <Image
          src="/elvish.avif"
          width={140}
          height={140}
          alt="Picture of the author"
          className="rounded-full w-40 h-40 object-cover"
        />
      </div>
      <div
        className="tooltip tooltip-bottom"
        data-tip="Unleash the Power: One Click = 50 Votes!"
      >
        <button
          className="btn btn-lg mt-5 bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={handleButtonClick}
        >
          {isLoading ? (
            <svg
              className="animate-spin h-5 w-5 mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM20 12c0-3.042-1.135-5.824-3-7.938l-3 2.647V12h4a8 8 0 018 8h-4zm-2-5.291l-3-2.647V4.062A7.962 7.962 0 0120 12h-4z"
              ></path>
            </svg>
          ) : (
            "Vote Now"
          )}
        </button>
      </div>
      <Toaster />
    </div>
  );
}
