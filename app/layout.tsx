import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Provider } from "@/context/Provider";
import TwSizeIndicator from "@/components/helpers/TwSizeIndicator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Advaita punk",
  description: "La ciencia del desconocimiento",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      {/* <body className={inter.className}> */}
      <body>
      <TwSizeIndicator />
        <Provider>
          <Navbar />
        {children}
        <Footer />
        </Provider>
        </body>
    </html>
  );
}
