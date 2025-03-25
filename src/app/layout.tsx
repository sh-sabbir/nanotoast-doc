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
  title: "Nanotoast - Customizable, Lightweight JS Toast Notifications",
  description: "A lightweight and customizable toast notification library for JavaScript with support for success, error, info, warning, message descriptions, async promise handling, and positioning.",
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[#FEFAE0] bg-[radial-gradient(#3818051a_1px,transparent_1px)] [background-size:16px_16px] ${inter.className} ${signika.variable}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
