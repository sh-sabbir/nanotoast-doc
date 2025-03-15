'use client';

import toast from '@iamsabbir/nanotoast';
import { CodeBlock } from '@/components/CodeBlock';
import Link from 'next/link';

const installCode = `npm install @iamsabbir/nanotoast`;

const layoutCode = `import { ToastProvider } from 'nanotoast';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}`;

const usageCode = `import toast from '@iamsabbir/nanotoast';

function MyComponent() {
  return (
    <button onClick={() => 
      toast.success('Hello World!')
    }>
      Show Toast
    </button>
  );
}`;

export default function GettingStarted() {
  return (
    <div className="min-h-screen">
      <nav className="border-b">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            NanoToast
          </Link>
          <button
            onClick={() => toast.info('Try me!')}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Try Toast
          </button>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8 prose prose-slate">
        <h1 className="text-4xl font-bold mb-8">Getting Started</h1>
        
        <p className="text-lg text-gray-600 mb-12">
          NanoToast is a toast component for React. Simple, lightweight, and beautiful.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Installation</h2>
          <CodeBlock 
            code={installCode} 
            language="bash" 
            filename="Terminal"
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Add Toaster to your app</h2>
          <p className="mb-4">
            It can be placed anywhere, even in server components such as layout.tsx.
          </p>
          <CodeBlock 
            code={layoutCode}
            language="tsx"
            filename="layout.tsx"
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Render a toast</h2>
          <CodeBlock 
            code={usageCode}
            language="tsx"
            filename="MyComponent.tsx"
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => toast.success('Success message')}
              className="p-4 bg-green-100 hover:bg-green-200 rounded-lg transition-colors"
            >
              Success Toast
            </button>
            <button
              onClick={() => toast.error('Error message')}
              className="p-4 bg-red-100 hover:bg-red-200 rounded-lg transition-colors"
            >
              Error Toast
            </button>
            <button
              onClick={() => toast.warning('Warning message')}
              className="p-4 bg-yellow-100 hover:bg-yellow-200 rounded-lg transition-colors"
            >
              Warning Toast
            </button>
            <button
              onClick={() => toast.info('Info message')}
              className="p-4 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors"
            >
              Info Toast
            </button>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">API Reference</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="text-left p-4 bg-gray-100">Method</th>
                  <th className="text-left p-4 bg-gray-100">Parameters</th>
                  <th className="text-left p-4 bg-gray-100">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border-b">toast(message, options)</td>
                  <td className="p-4 border-b">message: string<br />options?: &#123; duration?: number &#125;</td>
                  <td className="p-4 border-b">Shows a default toast</td>
                </tr>
                <tr>
                  <td className="p-4 border-b">toast.success(message, options)</td>
                  <td className="p-4 border-b">message: string<br />options?: &#123; duration?: number &#125;</td>
                  <td className="p-4 border-b">Shows a success toast</td>
                </tr>
                <tr>
                  <td className="p-4 border-b">toast.error(message, options)</td>
                  <td className="p-4 border-b">message: string<br />options?: &#123; duration?: number &#125;</td>
                  <td className="p-4 border-b">Shows an error toast</td>
                </tr>
                <tr>
                  <td className="p-4 border-b">toast.warning(message, options)</td>
                  <td className="p-4 border-b">message: string<br />options?: &#123; duration?: number &#125;</td>
                  <td className="p-4 border-b">Shows a warning toast</td>
                </tr>
                <tr>
                  <td className="p-4 border-b">toast.info(message, options)</td>
                  <td className="p-4 border-b">message: string<br />options?: &#123; duration?: number &#125;</td>
                  <td className="p-4 border-b">Shows an info toast</td>
                </tr>
                <tr>
                  <td className="p-4 border-b">toast.promise(promise, options)</td>
                  <td className="p-4 border-b">promise: Promise<br />options: &#123; loading?: string, success?: string, error?: string, duration?: number &#125;</td>
                  <td className="p-4 border-b">Shows loading, success, and error states for a promise</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
} 