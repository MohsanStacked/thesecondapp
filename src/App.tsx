import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Dhikr } from "./components/Dhikr";
import { Acts } from "./components/Acts";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex flex-col relative">
          <div className="absolute bottom-0 w-full h-1/2 bg-gray-200"></div>
          <Routes>
            <Route path="/" element={<Navigate to="/dhikr" replace />} />
            <Route path="/dhikr" element={<Dhikr />} />
            <Route path="/acts" element={<Acts />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
