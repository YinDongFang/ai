import { Avatar } from "../Avatar";
import { Message, MessageData } from "./Message";
import { Thinking } from "./Thinking";

interface ConversationProps {
  className?: string;
  messages: MessageData[];
}

export function Conversation({ messages, className }: ConversationProps) {
  return (
    <div
      className={`flex flex-col gap-4 overflow-y-auto text-sm text-gray-800 ${className}`}
    >
      {messages.map((message) => {
        const align = message.role === "user" ? "right" : "left";
        const avatar =
          message.role === "user" ? <Avatar.User /> : <Avatar.Assistant />;

        return (
          <Message
            key={message.id}
            message={message}
            align={align}
            avatar={avatar}
          />
        );
      })}
    </div>
  );
}
