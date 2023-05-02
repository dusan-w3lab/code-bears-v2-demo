import Navbar from "./components/Navbar/Navbar";
import Head from "next/head";
import { Outfit } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

const kanit = Outfit({ weight: "300", subsets: ["latin"] });

export const metadata = {
  title: "Code Bears",
  description: "Code Bears Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
