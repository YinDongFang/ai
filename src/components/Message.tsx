import { Bubble } from "./Bubble";

export interface MessageData {
  id: string;
  content: string;
  thinking?: string;
  role: "user" | "assistant" | "system";
}

export interface MessageProps {
  message: MessageData;
  avatar?: React.ReactNode;
  align?: "left" | "right" | "center";
  render?: (message: MessageData) => React.ReactNode;
}

const defaultRender = (message: MessageData) => {
  return <Bubble>{message.content}</Bubble>;
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
