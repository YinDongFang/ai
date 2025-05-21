import { AssistantMessageContent } from "../utils/parseAssistantMessage";
import { Markdown } from "./Markdown";
import { ToolUseBlock } from "./ToolUse";

export function Blocks(props: { blocks: AssistantMessageContent[] }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {props.blocks.map((block, index) => {
        if (block.type === "tool_use") {
          return <ToolUseBlock key={`tool-${index}`} tool={block} />;
        }
        return <Markdown key={`text-${index}`}>{block.content}</Markdown>;
      })}
    </div>
  );
}
