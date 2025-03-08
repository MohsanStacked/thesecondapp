import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Dhikr } from "./components/Dhikr";
import { Acts } from "./components/Acts";
import { Tasbeeh } from "./components/Tasbeeh";
import { DhikrTracker } from "./components/DhikrTracker";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex flex-col relative">
          <div className="absolute bottom-0 w-full h-1/2 bg-gray-200"></div>
          <Routes>
            <Route path="/" element={<Dhikr />} />
            <Route path="/dhikr" element={<Navigate to="/" replace />} />
            <Route path="/tasbeeh" element={<Tasbeeh />} />
            <Route path="/acts" element={<Acts />} />
            <Route path="/tracker" element={<DhikrTracker />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
