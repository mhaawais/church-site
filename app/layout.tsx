import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import HomeTopBackground from "@/components/home-top-background";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const faviconVersion = "v1.2"; // Declare it here

export const metadata: Metadata = {
  title: {
    template: "%s | Apostle Victor.",
    default: "Apostle Victor Okonkwo",
  },
  description: "Apostle Victor - Official Site for Books and Church.",
  icons: {
    icon: [
      `/assets/logo/Author-logo.jpg?v=${faviconVersion}`,
      // "/favicon.ico",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html lang="en">
  <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-black text-white antialiased`}>
    <div className="relative min-h-screen">
      <HomeTopBackground />
      <Header />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  </body>
</html>

  );
}
