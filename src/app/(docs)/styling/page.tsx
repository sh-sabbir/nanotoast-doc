import { CodeBlock } from '@/components/CodeBlock';
import TableOfContents from "@/components/TableOfContents";
import Section from "@/components/Section";
import DocsNavigation from '@/components/DocsNavigation';

export const metadata = {
  title: "Toast - NanoToast",
};

const installCode = `// Style with tailwindcss`;

export default function GettingStarted() {
  const tableOfContents = [
    { href: "#installation", label: "Installation" },
    { href: "#render-a-toast", label: "Render a toast" },
    { href: "#examples", label: "Examples" }
  ];

  return (
    <div className="flex lg:py-16 px-4 lg:px-8 lg:pl-0 gap-4">
      <div className="max-w-[672px] w-full mx-auto text-primary">
        <h1 className="text-3xl font-title font-medium mb-4">Styling</h1>

        <p className="text-base mb-12">
          ${`NanoToast is designed to be easily customizable. You can change the colors, fonts, and other styles to match your design. But a small headsup, NanoToast is already nicely styled, so you don't need to do much to make it look good.`}
        </p>

        <Section title="Style the toast!">
          <CodeBlock
            code={installCode}
            language="bash"
            filename="Using npm"
          />
        </Section>

        <DocsNavigation
          prev={{
            title: "Options",
            href: "/options"
          }}
        />
      </div>

      <TableOfContents items={tableOfContents} />
    </div>
  );
} 