import { CodeBlock } from '@/components/CodeBlock';
import TableOfContents from "@/components/TableOfContents";
import Section from "@/components/Section";
import ToastButton from "@/components/ToastButton";
import DocsNavigation from '@/components/DocsNavigation';

export const metadata = {
  title: "Toast - NanoToast",
};

const installCodeCDN = `<!-- Add the javascript -->
<script src="https://unpkg.com/@iamsabbir/nanotoast/dist/nanotoast.js"></script>
<!-- Or if you want esm module -->
<script src="https://unpkg.com/@iamsabbir/nanotoast/dist/nanotoast.esm.js"></script>

<!-- Add the css -->
<link rel="stylesheet" href="https://unpkg.com/@iamsabbir/nanotoast/dist/nanotoast.css">`;

const usageDefault = `NanoToast.toast("This is a simple toast!");`;
const usageSuccess = `NanoToast.toast.success("This is a simple toast!");`;
const usageError = `NanoToast.toast.error("This is a simple toast!");`;
const usageWarning = `NanoToast.toast.warning("This is a simple toast!");`;
const usageInfo = `NanoToast.toast.info("This is a simple toast!");`;

export default function GettingStarted() {
  const tableOfContents = [
    { href: "#installation", label: "Installation" },
    { href: "#basic-toast", label: "Basic Toast" },
    { href: "#success-toast", label: "Success Toast" },
    { href: "#error-toast", label: "Error Toast" },
    { href: "#warning-toast", label: "Warning Toast" },
    { href: "#info-toast", label: "Info Toast" }
  ];

  return (
    <div className="flex lg:py-16 px-4 lg:px-8 lg:pl-0 gap-4">
      <div className="max-w-[672px] w-full mx-auto text-primary">
        <h1 className="text-3xl font-title font-medium mb-4">Usage in Vanilla JS</h1>

        <p className="text-base mb-12">
          All the features of NanoToast are available in Vanilla JS.
        </p>

        <Section title="Installation">
          <CodeBlock
            code={installCodeCDN}
            language="html"
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
        </Section>

        <Section title="Error Toast">
          <CodeBlock
            code={usageError}
            language="js"
          />
        </Section>

        <Section title="Warning Toast">
          <CodeBlock
            code={usageWarning}
            language="js"
          />
        </Section>

        <Section title="Info Toast">
          <CodeBlock
            code={usageInfo}
            language="js"
          />
        </Section>

        <DocsNavigation
          prev={{
            title: "Basic Usage",
            href: "/usage"
          }}
          next={{
            title: "React",
            href: "/usage/react"
          }}
        />
      </div>

      <TableOfContents items={tableOfContents} />
    </div>
  );
} 