import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Stars from "@/components/shared/Stars";


export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="bg-[#000B2A] text-[#fafafa]">
        <Stars />
          <Navbar />
        <main>{children}</main>
          <Footer />
      </div>
    );
  }
  