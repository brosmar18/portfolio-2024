import React from "react";
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";


export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="bg-[#000B2A] text-[#fafafa]">
          <Navbar />
        <main>{children}</main>
          <Footer />
      </div>
    );
  }
  