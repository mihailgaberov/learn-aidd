"use client";

import CodeBlock from "./CodeBlock";

interface TextWithCodeProps {
  text: string;
  className?: string;
}

/**
 * Renders text that may contain code blocks.
 * Code blocks are marked with ```language\ncode\n```
 * Example: "Here's some code:\n```javascript\nconst x = 1;\n```\nThat's it!"
 */
export default function TextWithCode({ text, className = "" }: TextWithCodeProps) {
  // Split text by code blocks (```language\ncode\n```)
  const parts: (string | { code: string; language: string })[] = [];
  const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;
  let lastIndex = 0;
  let match;

  while ((match = codeBlockRegex.exec(text)) !== null) {
    // Add text before code block
    if (match.index > lastIndex) {
      const textPart = text.substring(lastIndex, match.index);
      if (textPart.trim()) {
        parts.push(textPart);
      }
    }
    
    // Add code block
    const language = match[1] || "javascript";
    const code = match[2].trim();
    parts.push({ code, language });
    
    lastIndex = match.index + match[0].length;
  }
  
  // Add remaining text
  if (lastIndex < text.length) {
    const textPart = text.substring(lastIndex);
    if (textPart.trim()) {
      parts.push(textPart);
    }
  }
  
  // If no code blocks found, return original text
  if (parts.length === 0) {
    return <span className={className}>{text}</span>;
  }

  return (
    <div className={className}>
      {parts.map((part, index) => {
        if (typeof part === "string") {
          return (
            <span key={index} className="whitespace-pre-wrap">
              {part}
            </span>
          );
        } else {
          return (
            <CodeBlock
              key={index}
              code={part.code}
              language={part.language}
            />
          );
        }
      })}
    </div>
  );
}
