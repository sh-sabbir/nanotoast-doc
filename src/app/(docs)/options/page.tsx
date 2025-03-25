import { CodeBlock } from '@/components/CodeBlock';
import TableOfContents from "@/components/TableOfContents";
import Section from "@/components/Section";
import DocsNavigation from '@/components/DocsNavigation';
import Tooltip from '@/components/Tooltip';

export const metadata = {
  title: "Toast - NanoToast",
};

const installCode = `npm install @iamsabbir/nanotoast`;
const installCodeYarn = `yarn add @iamsabbir/nanotoast`;

export default function GettingStarted() {
  const tableOfContents = [
    { href: "#available-options", label: "Available options" },
    { href: "#installation", label: "Installation" }
  ];

  return (
    <div className="flex lg:py-16 px-4 lg:px-8 lg:pl-0 gap-4">
      <div className="max-w-[672px] w-full mx-auto text-primary">
        <h1 className="text-3xl font-title font-medium mb-4">Options</h1>

        <p className="text-base mb-12">
          NanoToast has a lot of options to customize the toast.
        </p>

        <Section title="Available options">
          <div className="overflow-auto w-full shadow-sm my-6 border-2 border-brand-alt rounded-lg">
            <table className="w-full overflow-hidden">
              <thead>
                <tr className='border-b border-brand-alt border-transparent-border'>
                  <th className="px-6 py-1.5 text-[13px] text-left font-medium text-secondary bg-brand-alt first-of-type:w-[37%]">Option</th>
                  <th className="px-6 py-1.5 text-[13px] text-left font-medium text-secondary bg-brand-alt first-of-type:w-[37%]">Type</th>
                  <th className="px-6 py-1.5 text-[13px] text-left font-medium text-secondary bg-brand-alt first-of-type:w-[37%]">Default</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-t border-brand-alt border-transparent-border bg-table-bg/45 dark:bg-main'>
                  <td className="px-6 py-4 text-xs inline-flex gap-1">
                    <code className="code !text-[12px] h-fit">duration</code>
                    <Tooltip content="Duration in milliseconds before toast disappears"/>
                  </td>
                  <td className="px-6 py-4 text-xs"><code className="code !text-[12px] h-fit">number</code></td>
                  <td className="px-6 py-4 text-xs"><code className="code !text-[12px] h-fit">3000</code></td>
                </tr>
                <tr className='border-t border-brand-alt border-transparent-border bg-table-bg/45 dark:bg-main'>
                  <td className="px-6 py-4 text-xs inline-flex gap-1"><code className="code !text-[12px] h-fit">position</code> <Tooltip content='Position where the toast will appear. "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center"'/></td>
                  <td className="px-6 py-4 text-xs"><code className="code !text-[12px] h-fit">string</code></td>
                  <td className="px-6 py-4 text-xs"><code className="code !text-[12px] h-fit">top-right</code></td>
                </tr>
                <tr className='border-t border-brand-alt border-transparent-border bg-table-bg/45 dark:bg-main'>
                  <td className="px-6 py-4 text-xs inline-flex gap-1"><code className="code !text-[12px] h-fit">closeable</code> <Tooltip content="Whether the toast can be closed manually"/></td>
                  <td className="px-6 py-4 text-xs"><code className="code !text-[12px] h-fit">boolean</code></td>
                  <td className="px-6 py-4 text-xs"><code className="code !text-[12px] h-fit">true</code></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

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

        <DocsNavigation
          prev={{
            title: "React",
            href: "/usage/react"
          }}
          next={{
            title: "Alpine Js",
            href: "/usage/alpine"
          }}
        />
      </div>

      <TableOfContents items={tableOfContents} />
    </div>
  );
} 