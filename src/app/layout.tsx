import Navbar from "./components/Navbar/Navbar";

import Head from "next/head";
import { Kanit } from "next/font/google";

import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

const kanit = Kanit({ weight: "300", subsets: ["latin"] });

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
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        />
      </Head>
      <body className={kanit.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
