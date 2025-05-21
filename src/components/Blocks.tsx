import { AssistantMessageContent } from "../utils/parseAssistantMessage";
import { Markdown } from "./Markdown";

export function Blocks(props: { blocks: AssistantMessageContent[] }) {
  return (
    <div className="flex flex-col gap-2">
      {props.blocks.map((block, index) => {
        if (block.type === "tool_use") {
          return <div key={`tool-${index}`}>{block.name}</div>;
        }
        return <Markdown key={`text-${index}`}>{block.content}</Markdown>;
      })}
    </div>
  );
}
