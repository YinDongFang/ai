import { Bubble } from "./Bubble";
import { Thinking } from "./Thinking";
import { Blocks } from "./Blocks";
import { AssistantMessageContent } from "../utils/parseAssistantMessage";
import { Markdown } from "./Markdown";

export interface MessageData {
  content: string;
  thinking?: string;
  blocks?: AssistantMessageContent[];
  tool?: {
    server_name: string;
    tool_name: string;
    args: any;
    result: any;
  };
  role: "user" | "assistant" | "system" | "tool";
}

export interface MessageProps {
  message: MessageData;
  avatar?: React.ReactNode;
  align?: "left" | "right" | "center";
  render?: (message: MessageData) => React.ReactNode;
}

const defaultRender = (message: MessageData) => {
  return (
    <Bubble className="max-w-[80%]">
      <div className="flex flex-col gap-2 items-start">
        {message.thinking && <Thinking message={message} />}
        {message.blocks?.length ? (
          <Blocks blocks={message.blocks} />
        ) : (
          <Markdown>{message.content}</Markdown>
        )}
      </div>
    </Bubble>
  );
};

export function Message(props: MessageProps) {
  const { message, avatar, render = defaultRender, align = "left" } = props;

  return (
    <div
      className="flex gap-3"
      style={
        align === "left"
          ? { justifyContent: "start", flexDirection: "row" }
          : { justifyContent: "end", flexDirection: "row-reverse" }
      }
    >
      {avatar && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full overflow-hidden">
          {avatar}
        </div>
      )}
      {render(message)}
    </div>
  );
}
