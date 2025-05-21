import { Bubble } from "./Bubble";
import { Thinking } from "./Thinking";
import { Blocks } from "./Blocks";
import { AssistantMessageContent } from "../utils/parseAssistantMessage";
import { Markdown } from "./Markdown";

export interface MessageData {
  id: string;
  content: string;
  thinking?: string;
  blocks?: AssistantMessageContent[];
  role: "user" | "assistant" | "system";
}

export interface MessageProps {
  message: MessageData;
  avatar?: React.ReactNode;
  align?: "left" | "right" | "center";
  render?: (message: MessageData) => React.ReactNode;
}

const defaultRender = (message: MessageData) => {
  return (
    <Bubble>
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
      <div>{render(message)}</div>
    </div>
  );
}
