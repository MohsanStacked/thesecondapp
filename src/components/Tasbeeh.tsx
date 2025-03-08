import { useState, useEffect, useCallback } from "react";
import { quotes } from "../data/quotes";
export const Tasbeeh = () => {
  const [quoteIndex, setQuoteIndex] = useState(() => {
    const savedIndex = localStorage.getItem("tasbeeh_current_index");
    return savedIndex ? parseInt(savedIndex, 10) : 0;
  });
  const [count, setCount] = useState(0);
  const [target] = useState(33);

  // Load saved count from localStorage
  useEffect(() => {
    const key = `dhikr_${quotes[quoteIndex]?.arabic}`;
    const savedData = localStorage.getItem(key);
    if (savedData) {
      const data = JSON.parse(savedData);
      setCount(data.count);
    } else {
      setCount(0);
    }
  }, [quoteIndex]);

  // Save count to localStorage when it changes
  useEffect(() => {
    const key = `dhikr_${quotes[quoteIndex]?.arabic}`;
    const data = {
      name: quotes[quoteIndex]?.transliteration || "",
      arabic: quotes[quoteIndex]?.arabic || "",
      count: count,
      lastUpdated: new Date().toISOString(),
    };
    localStorage.setItem(key, JSON.stringify(data));
  }, [count, quoteIndex]);

  const debounce = (func: Function, wait: number) => {
    let timeout: number | undefined;
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  const incrementCount = useCallback(
    debounce(() => {
      if (count < target) {
        setCount((prev) => prev + 1);
      }
    }, 100),
    [count, target]
  );

  const resetCount = () => {
    setCount(0);
  };

  const getColorClass = (color: string) => {
    const colorMap: Record<string, string> = {
      amber: "bg-amber-500",
      emerald: "bg-emerald-500",
      rose: "bg-rose-500",
    };
    return colorMap[color] || "bg-amber-500";
  };

  const navigateQuote = (direction: "next" | "prev") => {
    const newIndex =
      direction === "next"
        ? (quoteIndex + 1) % quotes.length
        : (quoteIndex - 1 + quotes.length) % quotes.length;
    setQuoteIndex(newIndex);
    localStorage.setItem("tasbeeh_current_index", newIndex.toString());
  };

  // Use a single color for the counter
  const counterColor = "emerald";

  const activeQuote = {
    arabic: quotes[quoteIndex]?.arabic || "",
    transliteration: quotes[quoteIndex]?.transliteration || "",
  };

  return (
    <div className="flex-grow flex flex-col items-center justify-center relative z-10 min-h-[80vh]">
      <div className="w-full max-w-md mx-auto p-4">
        <div className="w-full bg-stone-100 rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex justify-between mb-6">
            <div className="w-full text-center">
              <h1 className="text-xl font-semibold text-stone-800">
                Increase Your Hasanat
              </h1>
              <p className="text-sm text-stone-600">
                Be sincere in every action.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-stone-200">
            <div className="text-center max-h-[20vh] overflow-y-auto px-4 py-5">
              <p className="text-3xl font-arabic mb-8 text-stone-800 leading-loose">
                {activeQuote.arabic}
              </p>
              <p className="text-xl italic mb-8 text-stone-700 leading-loose">
                {activeQuote.transliteration}
              </p>
            </div>
          </div>

          <div className="my-8 border-t border-stone-200"></div>

          <div className="flex justify-center">
            <button
              onClick={incrementCount}
              className={`w-32 h-32 rounded-full ${getColorClass(
                counterColor
              )} text-white text-4xl shadow-lg flex items-center justify-center hover:opacity-90 transition-opacity`}
            >
              {count}
            </button>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={resetCount}
              className="text-stone-500 hover:text-stone-700 text-sm"
            >
              Reset Counter
            </button>
          </div>
          <div className="flex justify-between mt-8">
            <button
              onClick={() => navigateQuote("prev")}
              className={`px-3 py-1 rounded-lg text-sm ${getColorClass(
                counterColor
              )} text-white`}
            >
              ← Previous
            </button>
            <div className="text-stone-500 text-xs pt-1">
              {quoteIndex + 1}/{quotes.length}
            </div>
            <button
              onClick={() => navigateQuote("next")}
              className={`px-3 py-1 rounded-lg text-sm ${getColorClass(
                counterColor
              )} text-white`}
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
