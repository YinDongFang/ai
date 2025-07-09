import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export function Markdown({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  // return <div className="max-h-[400px] overflow-y-auto">{children}</div>;

  return (
    <div className={`markdown-body markdown-override ${className}`}>
      <ReactMarkdown
        components={{
          code({ node, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return (
              <code
                {...props}
                className={`${className} block max-h-[300px] overflow-y-auto`}
              >
                {children}
              </code>
            );

            return match ? (
              <SyntaxHighlighter
                {...(props as any)}
                className="max-h-[400px] overflow-y-auto"
                language={match[1]}
                PreTag="div"
                wrapLongLines={true}
                wrapLines={false}
              >
                {children as string}
              </SyntaxHighlighter>
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            );
          },
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
