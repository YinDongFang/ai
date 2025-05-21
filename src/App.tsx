import { useXAgent, Sender, XRequest, useXChat, Bubble } from "@ant-design/x";
import { Avatar } from "./Avatar";

const { create } = XRequest({
  baseURL: "https://openrouter.ai/api/v1/chat/completions",
  dangerouslyApiKey:
    "Bearer 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",
  model: "deepseek/deepseek-chat:free",
});

export default function App() {
  const [agent] = useXAgent({
    request: async (info, callbacks) => {
      const { messages, message } = info;
      const { onUpdate } = callbacks;

      // current message
      console.log("message", message);
      // messages list
      console.log("messages", messages);

      let content: string = "";

      try {
        create(
          {
            messages: [{ role: "user", content: message }],
            stream: true,
            stream_options: {
              include_usage: true,
            },
          },
          {
            onSuccess: (chunks) => {
              console.log("sse chunk list", chunks);
            },
            onError: (error) => {
              console.log("error", error);
            },
            onUpdate: (chunk) => {
              if (chunk.data === " [DONE]") {
                return;
              }
              console.log("sse object", chunk);

              const data = JSON.parse(chunk.data);

              content += data?.choices[0].delta.content;
              console.log();

              onUpdate({ role: "assistant", content } as any);
            },
          }
        );
      } catch (error) {
        // handle error
      }
    },
  });

  const {
    // use to send message
    onRequest,
    // use to render messages
    messages,
  } = useXChat({ agent });

  const items = messages.map(({ message, id }: any) => ({
    // key is required, used to identify the message
    key: id,
    content: message.role ? message.content : message,
    role: message.role || "user",
  }));

  return (
    <div className="flex flex-col h-full p-8">
      <Bubble.List
        className="flex-1"
        items={items}
        roles={{
          user: {
            placement: "end",
            avatar: {
              icon: <Avatar.User />,
              style: { border: "none", background: "none" },
            },
          },
          assistant: {
            placement: "start",
            avatar: {
              icon: <Avatar.Assistant />,
              style: { border: "none", background: "#95bdd6" },
            },
          },
        }}
      />
      <Sender
        onSubmit={(...args) => {
          console.log("onSubmit", args);
          onRequest(...args);
        }}
      />
    </div>
  );
}
