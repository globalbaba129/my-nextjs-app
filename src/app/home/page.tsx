"use client";
import FirstPage from "../first/page";
import Footer from "../Footer/page";
import React from "react";

// src/app/home/page.tsx

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br text-black">
      {/* FirstPage Reusable Component */}
      <FirstPage />

      {/* Home Page Content */}
      <div className="flex items-center justify-center py-10 text-3xl font-semibold">
        Home Page
      </div>


    </div>
  );
}
