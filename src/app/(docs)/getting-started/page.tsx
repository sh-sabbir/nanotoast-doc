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
    { href: "#render-a-toast", label: "Render a toast" }
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