import FirstPage from "../first/page";
import Footer from "../Footer/page";
import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br text-black">
      {/* FirstPage Reusable Component */}
      <FirstPage />

      {/* About Page Content */}
      <div className="flex items-center justify-center py-10 text-3xl font-semibold">
        About Page
      </div>
          {/* Footer */}
            <Footer />
    </div>
  );
}
