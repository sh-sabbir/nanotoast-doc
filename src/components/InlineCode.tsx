'use client';

import { useState, useRef } from 'react';

interface InlineCodeProps {
  code: string;
  className?: string;
}

export function InlineCode({ code, className }: InlineCodeProps) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      timeoutRef.current = setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className={`relative inline-flex items-center bg-gray-100 rounded px-2 py-1 font-mono text-sm ${className || ''}`}>
      <code>{code}</code>
      <button
        onClick={copyToClipboard}
        className="ml-auto cursor-pointer p-1 text-gray-500 hover:text-gray-700 rounded transition-colors"
        aria-label="Copy code"
      >
        {copied ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-green-500">
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
            viewBox="0 0 24 24" 
            width="14" 
            height="14" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            fill="none" 
            shapeRendering="geometricPrecision"
          >
            <path d="M8 17.929H6c-1.105 0-2-.912-2-2.036V5.036C4 3.91 4.895 3 6 3h8c1.105 0 2 .911 2 2.036v1.866m-6 .17h8c1.105 0 2 .91 2 2.035v10.857C20 21.09 19.105 22 18 22h-8c-1.105 0-2-.911-2-2.036V9.107c0-1.124.895-2.036 2-2.036z" />
          </svg>
        )}
      </button>
    </div>
  );
} 