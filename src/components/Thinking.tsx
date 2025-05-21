import { useState } from "react";
import { Bubble } from "./Bubble";
import { Message, MessageProps } from "./Message";
import { Markdown } from "./Markdown";

export function Thinking(props: MessageProps) {
  const [collapsed, setCollapsed] = useState(false);

  const content = (
    <div className="flex flex-col gap-2 items-start">
      <span
        role="button"
        className="cursor-pointer px-2 py-1 rounded-md hover:bg-white"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? "显示思考过程" : "隐藏思考过程"}
      </span>
      {collapsed ? null : (
        <div className="text-gray-500 italic border-l border-gray-400 pl-2">
          <Markdown>{props.message.thinking!}</Markdown>
        </div>
      )}
      <div className="pl-2">
        <Markdown>{props.message.content!}</Markdown>
      </div>
    </div>
  );

  return <Message {...props} render={() => <Bubble>{content}</Bubble>} />;
}
