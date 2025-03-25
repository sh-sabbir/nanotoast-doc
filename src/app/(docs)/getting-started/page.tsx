import { CodeBlock } from '@/components/CodeBlock';
import TableOfContents from "@/components/TableOfContents";
import Section from "@/components/Section";
import ToastButton from "@/components/ToastButton";
import DocsNavigation from '@/components/DocsNavigation';

export const metadata = {
  title: "Getting Started - NanoToast",
};

const installCode = `npm install @iamsabbir/nanotoast`;
const installCodeYarn = `yarn add @iamsabbir/nanotoast`;
const installCodeCDN = `<!-- Add the javascript -->
<script src="https://unpkg.com/@iamsabbir/nanotoast/dist/nanotoast.js"></script>
<!-- Or if you want esm module -->
<script src="https://unpkg.com/@iamsabbir/nanotoast/dist/nanotoast.esm.js"></script>

<!-- Add the css -->
<link rel="stylesheet" href="https://unpkg.com/@iamsabbir/nanotoast/dist/nanotoast.css">`;

const importCode = `import toast from "@iamsabbir/nanotoast";
import "@iamsabbir/nanotoast/src/styles.css"; // Ensure you import styles`;

const usageCode = `${importCode}

toast("This is a simple toast!");`;
const usageCodeVanilla = `NanoToast.toast("This is a simple toast!");`;

export default function GettingStarted() {
  const tableOfContents = [
    { href: "#installation", label: "Installation" },
    { href: "#add-nanotoast-to-your-app", label: "Add NanoToast to your app" },
    { href: "#render-a-toast", label: "Render a toast" },
    { href: "#examples", label: "Examples" },
    { href: "#api-reference", label: "API Reference" }
  ];

  return (
    <div className="flex lg:py-16 px-4 lg:px-8 lg:pl-0 gap-4">
      <div className="max-w-[672px] w-full mx-auto text-primary">
        <h1 className="text-3xl font-title font-medium mb-4">Getting Started</h1>

        <p className="text-base mb-12">
          NanoToast is a lightweight and customizable toast notification library for JavaScript with support for success, error, info, warning, message descriptions, async promise handling, and positioning.
        </p>

        <Section title="Installation">
          <CodeBlock
            code={installCode}
            language="bash"
            filename="Using npm"
          />
          <br />
          <CodeBlock
            code={installCodeYarn}
            language="bash"
            filename="Using Yarn"
          />
          <br />
          <CodeBlock
            code={installCodeCDN}
            language="html"
            filename="Using a CDN (No installation required)"
          />
        </Section>

        <Section title="Add NanoToast to your app">
          <p className="mb-4">
            If you have used npm or yarn then do this first
          </p>
          <CodeBlock
            code={importCode}
            language="tsx"
            filename="Import `@iamsabbir/nanotoast`"
          />
        </Section>

        <Section title="Render a toast">
          <CodeBlock
            code={usageCode}
            language="js"
            filename="when using as module"
          />
          <br />
          <CodeBlock
            code={usageCodeVanilla}
            language="js"
            filename="when using from CDN"
          />
          <br />
          <ToastButton message="This is a simple toast!" type="default">
            Make a toast
          </ToastButton>
        </Section>

        <Section title="Examples">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ToastButton message="Success message" type="success" className="p-4 bg-green-100 hover:bg-green-200 rounded-lg transition-colors">
              Success Toast
            </ToastButton>
            <ToastButton message="Error message" type="error" className="p-4 bg-red-100 hover:bg-red-200 rounded-lg transition-colors">
              Error Toast
            </ToastButton>
            <ToastButton message="Warning message" type="warning" className="p-4 bg-yellow-100 hover:bg-yellow-200 rounded-lg transition-colors">
              Warning Toast
            </ToastButton>
            <ToastButton message="Info message" type="info" className="p-4 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors">
              Info Toast
            </ToastButton>
          </div>
        </Section>

        <Section title="API Reference">
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
        </Section>

        <DocsNavigation
          next={{
            title: "Basic Usage",
            href: "/usage"
          }}
        />
      </div>

      <TableOfContents items={tableOfContents} />
    </div>
  );
} 