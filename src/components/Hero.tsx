import { Dhikr } from "./Dhikr";

export const Hero = () => (
  <main className="flex-grow flex flex-col items-center justify-center relative z-10 min-h-screen py-8">
    <div className="absolute bottom-0 w-full h-1/2 bg-gray-200"></div>

    <div className="relative z-10 flex items-center justify-center flex-1 w-full px-4 sm:px-0">
      <Dhikr />
    </div>
  </main>
);
