import { ToolUse } from "../utils/parseAssistantMessage";
import { Button } from "./Button";
import { Markdown } from "./Markdown";

export function ToolUseBlock(props: { tool: ToolUse }) {
  const { tool } = props;
  const { name, params } = tool;
  const { server_name, tool_name, arguments: args } = params;

  const content = `## 请求调用工具\`${server_name}:${tool_name}\`\n\`\`\`json\n${args}\n\`\`\``;

  return (
    <div className="flex flex-col gap-2">
      <Markdown className="w-[100vw] max-w-full">{content}</Markdown>
      <div className="flex justify-end gap-2">
        <Button>调用</Button>
        <Button className="bg-red-500">取消</Button>
      </div>
    </div>
  );
}
