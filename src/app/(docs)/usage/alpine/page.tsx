import { CodeBlock } from '@/components/CodeBlock';
import TableOfContents from "@/components/TableOfContents";
import Section from "@/components/Section";
import ToastButton from "@/components/ToastButton";
import DocsNavigation from '@/components/DocsNavigation';

export const metadata = {
  title: "Toast - NanoToast",
};

const installCode = `npm install @iamsabbir/nanotoast`;
const installCodeYarn = `yarn add @iamsabbir/nanotoast`;
const installCodeCDN = `<!-- Add the javascript -->
<script src="https://unpkg.com/@iamsabbir/nanotoast/dist/nanotoast.js"></script>
<!-- Or if you want esm module -->
<script src="https://unpkg.com/@iamsabbir/nanotoast/dist/nanotoast.esm.js"></script>

<!-- Add the css -->
<link rel="stylesheet" href="https://unpkg.com/@iamsabbir/nanotoast/dist/nanotoast.css">`;

const usageCode = `<button x-data @click="toast.success('Hello from Alpine.js!')">Show Toast</button>`;

const moreUsageCode = `toast.success("Alpine.js is awesome!");
toast.error("Alpine.js is not awesome!");
toast.warning("Alpine.js is okay!");
toast.info("Alpine.js is great!");`;

export default function GettingStarted() {
  const tableOfContents = [
    { href: "#installation", label: "Installation" },
    { href: "#render-a-toast", label: "Render a toast" },
    { href: "#more-toast-types", label: "More toast types" }
  ];

  return (
    <div className="flex lg:py-16 px-4 lg:px-8 lg:pl-0 gap-4">
      <div className="max-w-[672px] w-full mx-auto text-primary">
        <h1 className="text-3xl font-title font-medium mb-4">Usage in Alpine.js</h1>

        <p className="text-base mb-12">
          All the features of NanoToast are available in Alpine.js too!
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
            language="bash"
            filename="Using CDN"
          />
        </Section>

        <Section title="Render a toast">
          <CodeBlock
            code={usageCode}
            language="html"
          />
          <br />
          <ToastButton message="Hello from Alpine.js!" type="default">
            Make a toast
          </ToastButton>
        </Section>

        <Section title="More toast types">
          <CodeBlock
            code={moreUsageCode}
            language="jsx"
          />
        </Section>

        <DocsNavigation
          prev={{
            title: "Vue",
            href: "/usage/vue"
          }}
          next={{
            title: "Options",
            href: "/options"
          }}
        />
      </div>

      <TableOfContents items={tableOfContents} />
    </div>
  );
} 