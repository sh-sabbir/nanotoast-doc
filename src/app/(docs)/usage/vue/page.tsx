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

const usageCode = `<script setup>
${importCode}

const showToast = () => {
  toast.success("Hello from Vue!");
};
</script>

<template>
  <button @click="showToast">Show Toast</button>
</template>`;

const moreUsageCode = `toast.success("Vue is awesome!");
toast.error("Vue is not awesome!");
toast.warning("Vue is okay!");
toast.info("Vue is great!");`;

export default function GettingStarted() {
  const tableOfContents = [
    { href: "#installation", label: "Installation" },
    { href: "#render-a-toast", label: "Render a toast" },
    { href: "#more-toast-types", label: "More toast types" }
  ];

  return (
    <div className="flex lg:py-16 px-4 lg:px-8 lg:pl-0 gap-4">
      <div className="max-w-[672px] w-full mx-auto text-primary">
        <h1 className="text-3xl font-title font-medium mb-4">Usage in Vue</h1>

        <p className="text-base mb-12">
          All the features of NanoToast are available in Vue too!
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
            language="html"
          />
          <br />
          <ToastButton message="Hello from Vue!" type="default">
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