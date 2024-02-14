import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Stars from "@/components/shared/Stars";


export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex h-screen flex-col w-screen">
        <Stars />
        <div className="h-24">
          <Navbar />
        </div>
        <main className="h-[calc(100vh-6rem)]">{children}</main>
        <Footer />
      </div>
    );
  }
  