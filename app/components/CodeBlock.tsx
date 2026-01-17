"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export default function CodeBlock({ code, language = "javascript", className = "" }: CodeBlockProps) {
  return (
    <div className={`my-4 rounded-lg overflow-hidden border border-zinc-300 dark:border-zinc-700 ${className}`}>
      <SyntaxHighlighter
        language={language}
        style={oneLight}
        customStyle={{
          margin: 0,
          padding: "1rem",
          fontSize: "0.875rem",
          lineHeight: "1.5",
          background: "transparent",
        }}
        className="dark:hidden"
        codeTagProps={{
          style: {
            fontFamily: "var(--font-geist-mono), 'Fira Code', 'Consolas', monospace",
          },
        }}
      >
        {code}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        customStyle={{
          margin: 0,
          padding: "1rem",
          fontSize: "0.875rem",
          lineHeight: "1.5",
          background: "transparent",
        }}
        className="hidden dark:block"
        codeTagProps={{
          style: {
            fontFamily: "var(--font-geist-mono), 'Fira Code', 'Consolas', monospace",
          },
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
