import type { Metadata } from "next";
import "@/app/globals.css";
import '@iamsabbir/nanotoast/dist/nanotoast.css';
import Image from "next/image";
import DocsNav from "@/components/DocsNav";

export const metadata: Metadata = {
  title: "Test Nanotoast - Customizable, Lightweight JS Toast Notifications",
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

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen">
      <header className="h-12 bg-subtle pl-4 pr-[5px] flex items-center justify-between dotted-bottom mb-12 z-10 lg:hidden">
        <a className="font-medium" href="/">
          <Image src="/nanotoast-alt.svg" alt="NanoToast" width={126} height={24} />
        </a>
        <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:R9jb:" data-state="closed" aria-label="Open side navigation" className="text-tertiary h-10 w-10 rounded-lg grid place-items-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12.25H21.5M3 6H21.5M3 18.5H21.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </button>
      </header>
      <main className="bg-subtle lg:grid grid-cols-[240px_1fr] gap-4">
        <div></div>
        <DocsNav />
        {children}
      </main>
    </div>
  );
}
