'use client';

import Link from 'next/link';
import toast from '@iamsabbir/nanotoast';
import { InlineCode } from '@/components/InlineCode';

export default function Home() {
  const getRandomPosition = () => {
    const positions = [
      "top-right",
      "top-left",
      "bottom-right", 
      "bottom-left",
      "top-center",
      "bottom-center"
    ] as const;
    
    return positions[Math.floor(Math.random() * positions.length)];
  };
  const getRandomMessage = () => {
    const messages = [
      "Hello there! 👋",
      "Thanks for checking out NanoToast! ✨",
      "You're awesome! 🌟",
      "Keep being amazing! 🚀",
      "Have a great day! 🌈",
      "Stay wonderful! ⭐",
      "Welcome to NanoToast! 🎉",
      "Simple and beautiful toasts! 💫",
      "Thanks for stopping by! 🙌",
      "Hope you enjoy NanoToast! 🎨",
      "Built with love! ❤️",
      "Let's make some toast! 🍞"
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  };
  return (
    <div className="min-h-screen bg-[#FEFAE0] bg-[radial-gradient(#3818051a_1px,transparent_1px)] [background-size:16px_16px]">
      <main className="min-h-[calc(100vh-73px)] flex flex-col items-center justify-center p-6 px-8 md:p-16">
        <div className="max-w-4xl w-full space-y-4 text-center">
          <header className="space-y-4">
            <div className="flex justify-center">
              <img src="/nanotoast.svg" alt="NanoToast Logo" className="w-39" />
            </div>
            <p className="font-light text-primary font-title">
            Customisable & Lightweight JavaScript Toast Library
            </p>
          </header>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => toast(getRandomMessage(), { 
                position: getRandomPosition(),
                duration: 5000,
              })}
              className="w-38 h-10 leading-0 rounded-md px-6 py-3 cursor-pointer bg-brand text-white border border-gray-300 hover:bg-brand transition-colors"
            >
              Make a toast
            </button>

            <Link
              href="/getting-started"
              className="w-38 h-10 leading-none rounded-md px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              GitHub
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/getting-started"
              className="text-brand hover:text-primary transition-colors"
            >
              Documentation
            </Link>
          </div>

          <InlineCode className='w-96 mt-4 !bg-brand-alt text-primary ring-1 ring-chinese-black/16 rounded-md !p-2 !pl-4' code='npm install @iamsabbir/nanotoast' />

          <section className="pt-8">
            <div className="grid grid-cols-3 gap-4 max-w-3xl text-primary mx-auto">
              <div className="bg-brand-alt rounded-md p-6 transition-colors ring-1 ring-chinese-black/16">
                <h3 className="font-semibold mb-2 text-2xl leading-none font-title">Lightweight</h3>
                <div className="flex items-baseline justify-center font-title">
                  <span className="text-9xl font-medium">4</span>
                  <span className="text-xl ml-0.5">kb</span>
                </div>
                <p className="text-base">minified + gzipped</p>
              </div>

              <div className="bg-brand-alt rounded-md p-6 col-span-2 transition-colors ring-1 ring-chinese-black/16">
                <h3 className="font-semibold mb-2 text-2xl leading-none font-title">Beautiful Default Toasts</h3>
                <p className="text-base">Fully customizable with CSS and JavaScript options</p>
              </div>

              <div className="bg-brand-alt rounded-md p-6 transition-colors ring-1 ring-chinese-black/16">
                <h3 className="font-semibold mb-2 text-2xl leading-none font-title">Promise API</h3>
                <img src="/promise.svg" alt="Promise API" className='mx-auto mt-4' />
              </div>

              <div className="bg-brand-alt rounded-md p-6 transition-colors ring-1 ring-chinese-black/16">
                <h3 className="font-semibold mb-2 text-2xl leading-none font-title">Easy Integration</h3>
                <p className="text-sm">Simple API that works with any JavaScript framework (or not a framework at all!)</p>
                <div className="grid grid-cols-4 gap-1 mt-4">
                  <img src="/javascript.svg" alt="JavaScript" className="w-8 h-8 p-1 mx-auto" />
                  <img src="/nodejs.svg" alt="Node.js" className="w-8 h-8 p-1 mx-auto" />
                  <img src="/react.svg" alt="React" className="w-8 h-8 p-1 mx-auto" />
                  <img src="/vue.svg" alt="Vue" className="w-8 h-8 p-1 mx-auto" />
                  <img src="/alpinejs.svg" alt="Alpine.js" className="w-8 h-8 p-1 mx-auto" />
                  <img src="/nextjs.svg" alt="NextJs " className="w-8 h-8 p-1 mx-auto" />
                  <img src="/nuxt.svg" alt="Nuxt " className="w-8 h-8 p-1 mx-auto" />
                  <div className="relative inline-block">
                    <img 
                      src="/more.svg" 
                      alt="and many more!" 
                      className="w-8 h-8 p-1 mx-auto cursor-pointer"
                      onClick={() => {
                        const tooltip = document.getElementById('more-tooltip');
                        if (tooltip) {
                          tooltip.classList.toggle('opacity-0');
                          tooltip.classList.toggle('opacity-100');
                        }
                      }}
                      onMouseEnter={() => {
                        const tooltip = document.getElementById('more-tooltip');
                        if (tooltip) {
                          tooltip.classList.remove('opacity-0');
                          tooltip.classList.add('opacity-100');
                        }
                      }}
                      onMouseLeave={() => {
                        const tooltip = document.getElementById('more-tooltip');
                        if (tooltip) {
                          tooltip.classList.add('opacity-0');
                          tooltip.classList.remove('opacity-100');
                        }
                      }}
                    />
                    <div 
                      id="more-tooltip"
                      className="absolute -top-6 left-1/2 -translate-x-1/2 px-2 py-1 bg-brand ring-1 ring-chinese-black/16 text-white text-xs rounded opacity-0 transition-opacity whitespace-nowrap"
                    >
                      And many more!
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-brand-alt rounded-md p-6 transition-colors ring-1 ring-chinese-black/16">
                <h3 className="font-semibold mb-2 text-2xl leading-none font-title">Customizable</h3>
                <p className="text-base">Personalize the content of your toasts with custom JSX, icons, style attributes, color accents and more!</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
