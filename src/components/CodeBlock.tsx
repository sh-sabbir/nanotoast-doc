'use client';

import { useEffect, useRef, useState } from 'react';
import Prism from 'prismjs';
// import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/themes/prism-solarizedlight.css';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import '@/styles/prism-custom.css';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export function CodeBlock({ code, language = 'typescript', filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const copyButton = (
    <button
      onClick={copyToClipboard}
      className="absolute w-6 h-6 right-2 top-[5px] flex justify-center items-center cursor-pointer rounded-md transition-colors text-primary hover:text-tertiary"
    >
      {copied ? (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path
            d="M20 6L9 17L4 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          viewBox="0 0 20 20"
          width="16"
          height="16"
          fill="none"
        >
          <path fillRule="evenodd" clipRule="evenodd" d="M-0.000854492 1.99989C-0.000854492 0.895318 0.894586 -0.00012207 1.99916 -0.00012207H11.9991C13.1038 -0.00012207 13.9992 0.895318 13.9992 1.99989V5.99988H17.9992C19.1038 5.99988 19.9992 6.89532 19.9992 7.99989V18C19.9992 19.1046 19.1038 19.9999 17.9992 19.9999H7.99916C6.89459 19.9999 5.99915 19.1046 5.99915 18V13.9999H1.99916C0.894586 13.9999 -0.000854492 13.1046 -0.000854492 11.9999V1.99989ZM12.4992 5.99988H7.99916C6.89459 5.99988 5.99915 6.89532 5.99915 7.99989V12.4999H1.99916C1.72301 12.4999 1.49915 12.276 1.49915 11.9999V1.99989C1.49915 1.72374 1.72301 1.49988 1.99916 1.49988H11.9991C12.2753 1.49988 12.4992 1.72374 12.4992 1.99989V5.99988Z" fill="currentColor" />
        </svg>
      )}
    </button>
  );

  return (
    <div className="relative rounded-md border-2 border-brand-alt shadow-sm overflow-hidden">
      {filename && (
        <div className="bg-brand-alt text-brand text-sm px-4 py-2">
          {filename}

          {copyButton}
        </div>
      )}
      <div className="relative">
        {!filename && copyButton}
        <pre className={`!m-0 language-${language}`} tabIndex={0}>
          <code ref={codeRef} className={`language-${language}`}>{code}</code>
        </pre>
      </div>
    </div>
  );
} 