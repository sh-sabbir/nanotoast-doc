import { CodeBlock } from '@/components/CodeBlock';
import TableOfContents from "@/components/TableOfContents";
import Section from "@/components/Section";
import ToastButton from "@/components/ToastButton";
import DocsNavigation from "@/components/DocsNavigation";

export const metadata = {
  title: "Toast - NanoToast",
};

const importCode = `import toast from "@iamsabbir/nanotoast";
import "@iamsabbir/nanotoast/src/styles.css"; // Ensure you import styles`;

const usageDefault = `toast("This is a simple toast!");`;
const usageSuccess = `toast.success("This is a simple toast!");`;
const usageError = `toast.error("This is a simple toast!");`;
const usageWarning = `toast.warning("This is a simple toast!");`;
const usageInfo = `toast.info("This is a simple toast!");`;

export default function GettingStarted() {
  const tableOfContents = [
    { href: "#import-the-library", label: "Import the library" },
    { href: "#basic-toast", label: "Basic Toast" },
    { href: "#success-toast", label: "Success Toast" },
    { href: "#error-toast", label: "Error Toast" },
    { href: "#warning-toast", label: "Warning Toast" },
    { href: "#info-toast", label: "Info Toast" }
  ];

  return (
    <div className="flex lg:py-16 px-4 lg:px-8 lg:pl-0 gap-4">
      <div className="max-w-[672px] w-full mx-auto text-primary">
        <h1 className="text-3xl font-title font-medium mb-4">Basic Usage</h1>
        <p className="text-base mb-12">
          Using NanoToast is a straightforward process.
        </p>

        <Section title="Import the library">
          <CodeBlock
            code={importCode}
            language="js"
            filename="when using as module"
          />
        </Section>

        <Section title="Basic Toast">
          <CodeBlock
            code={usageDefault}
            language="js"
          />
          <ToastButton className='mt-4' message="This is a simple toast!" type="default">
            Make a toast!
          </ToastButton>
        </Section>

        <Section title="Success Toast">
          <CodeBlock
            code={usageSuccess}
            language="js"
          />
          <ToastButton className='mt-4' message="Locked and loaded!" type="success">
            Make a toast!
          </ToastButton>
        </Section>

        <Section title="Error Toast">
          <CodeBlock
            code={usageError}
            language="js"
          />
          <ToastButton className='mt-4' message="Opps! I did it again." type="error">
            Make a toast!
          </ToastButton>
        </Section>

        <Section title="Warning Toast">
          <CodeBlock
            code={usageWarning}
            language="js"
          />
          <ToastButton className='mt-4' message="Don't forget to import styles!" type="warning">
            Make a toast!
          </ToastButton>
        </Section>

        <Section title="Info Toast">
          <CodeBlock
            code={usageInfo}
            language="js"
          />
          <ToastButton className='mt-4' message="NanoToast is awesome!" type="info">
            Make a toast
          </ToastButton>
        </Section>

        <DocsNavigation
          prev={{
            title: "Getting Started",
            href: "/getting-started"
          }}
          next={{
            title: "Vanilla JS",
            href: "/usage/vanilla"
          }}
        />
      </div>

      <TableOfContents items={tableOfContents} />
    </div>
  );
} 