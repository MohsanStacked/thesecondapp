import React, { useState } from "react";
import { Quote } from "../data/quotes";

interface RectangleProps {
  quotes: Quote[];
}

export const Rectangle: React.FC<RectangleProps> = ({ quotes }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    // Ensure we don't get the same index
    setCurrentIndex((prev) => {
      let newIndex = randomIndex;
      while (newIndex === prev) {
        newIndex = Math.floor(Math.random() * quotes.length);
      }
      return newIndex;
    });
  };

  return (
    <div className="relative w-[90vw] sm:w-[32rem] h-auto min-h-[18rem] sm:min-h-[16rem] bg-gradient-to-r from-stone-100 to-neutral-200 mb-8 sm:mb-24 rounded-2xl shadow-lg overflow-hidden">
      {/* Decorative borders remain the same */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-amber-800/20 rounded-tl-2xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-amber-800/20 rounded-br-2xl"></div>
        <div className="absolute top-6 right-6 w-20 h-20 border-t-2 border-r-2 border-amber-800/10 rounded-tr-xl"></div>
        <div className="absolute bottom-6 left-6 w-20 h-20 border-b-2 border-l-2 border-amber-800/10 rounded-bl-xl"></div>
      </div>

      <div className="relative h-full flex flex-col items-center justify-start p-8 pb-20">
        <div className="w-full overflow-y-auto max-h-[calc(100vh-16rem)] scrollbar-hide">
          <h2
            className="text-2xl sm:text-3xl font-arabic mb-4 text-center text-amber-900"
            style={{ lineHeight: "2em" }}
          >
            {quotes[currentIndex].arabic}
          </h2>
          <p className="text-sm sm:text-lg text-center mb-4 text-stone-700 leading-relaxed px-4">
            {quotes[currentIndex].english}
          </p>
          <p className="text-sm sm:text-lg text-center mb-4 text-stone-700 leading-relaxed px-4">
            {quotes[currentIndex].transliteration}
          </p>
          {quotes[currentIndex].source && (
            <p className="text-xs text-center text-stone-500 italic">
              {quotes[currentIndex].source}
            </p>
          )}
          {quotes[currentIndex].virtues && (
            <p className="text-xs text-center text-stone-500 italic">
              {quotes[currentIndex].virtues}
            </p>
          )}
        </div>
      </div>

      <div className="absolute bottom-4 w-full flex justify-center space-x-4">
        <button
          onClick={handleNext}
          className="bg-amber-900 hover:bg-amber-800 text-white px-6 py-2 rounded-full transition-colors"
        >
          More hasanat
        </button>
      </div>
    </div>
  );
};
