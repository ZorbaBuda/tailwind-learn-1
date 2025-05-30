import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Provider } from "@/context/Provider";
import TwSizeIndicator from "@/components/pruinboom/helpers/TwSizeIndicator";


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
      <body className="bg-white text-black">
      <TwSizeIndicator />
        <Provider>
        
        {children}
       
        </Provider>
        </body>
    </html>
  );
}
