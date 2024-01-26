import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Stars from "@/components/shared/Stars";


export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex h-screen flex-col ">
        <Stars />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    );
  }
  