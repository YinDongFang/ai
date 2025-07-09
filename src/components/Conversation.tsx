import { Avatar } from "../Avatar";
import { Message, MessageData } from "./Message";
import { ToolMessage } from "./ToolMessage";

interface ConversationProps {
  className?: string;
  messages: (MessageData & { id: string })[];
}

export function Conversation({ messages, className }: ConversationProps) {
  return (
    <div
      className={`flex flex-col gap-4 overflow-y-auto text-sm text-gray-800 ${className}`}
    >
      {messages.map((message) => {
        const { avatar, align } = (
          {
            user: { avatar: <Avatar.User />, align: "right" },
            assistant: { avatar: <Avatar.Assistant />, align: "left" },
            system: { avatar: <Avatar.Assistant />, align: "center" },
            tool: { avatar: <Avatar.Api />, align: "right" },
          } as const
        )[message.role];

        if (message.role === "tool") {
          return (
            <ToolMessage
              align="right"
              avatar={avatar}
              key={message.id}
              message={message}
            />
          );
        }

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
