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

const importCode = `import toast from "@iamsabbir/nanotoast";
import "@iamsabbir/nanotoast/src/styles.css"; // Ensure you import styles`;

const usageCode = `${importCode}

const App = () => {
  return <button onClick={() => toast.success("React is awesome!")}>Show Toast</button>;
};`;

const moreUsageCode = `toast.success("React is awesome!");
toast.error("React is not awesome!");
toast.warning("React is okay!");
toast.info("React is great!");`;

export default function GettingStarted() {
  const tableOfContents = [
    { href: "#installation", label: "Installation" },
    { href: "#render-a-toast", label: "Render a toast" },
    { href: "#more-toast-types", label: "More toast types" }
  ];

  return (
    <div className="flex lg:py-16 px-4 lg:px-8 lg:pl-0 gap-4">
      <div className="max-w-[672px] w-full mx-auto text-primary">
        <h1 className="text-3xl font-title font-medium mb-4">Usage in React</h1>

        <p className="text-base mb-12">
          All the features of NanoToast are available in React too!
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
        </Section>

        <Section title="Render a toast">
          <CodeBlock
            code={usageCode}
            language="js"
          />
          <br />
          <ToastButton message="React is awesome!" type="default">
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
            title: "Vanilla Js",
            href: "/usage/vanilla"
          }}
          next={{
            title: "Vue",
            href: "/usage/vue"
          }}
        />
      </div>

      <TableOfContents items={tableOfContents} />
    </div>
  );
} 