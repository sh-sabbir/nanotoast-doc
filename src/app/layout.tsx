import type { Metadata } from "next";
import { Inter, Signika } from "next/font/google";
import "./globals.css";
import '@iamsabbir/nanotoast/dist/nanotoast.css';
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });
const signika = Signika({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-signika',
});

export const metadata: Metadata = {
  title: "Nanotoast - A minimal toast notification library for React",
  description: "A minimal toast notification library for React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${signika.variable}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
