import { useToolUse } from "../ToolUseContext";
import { ToolUse } from "../utils/parseAssistantMessage";
import { Button } from "./Button";
import { Markdown } from "./Markdown";
import { useRequest } from "ahooks";

export function ToolUseBlock(props: { tool: ToolUse }) {
  const { tool } = props;
  const { params } = tool;
  const { server_name, tool_name, arguments: args } = params;

  const call = useToolUse();

  const { run, loading } = useRequest(
    () => call(server_name, tool_name, args ? JSON.parse(args) : undefined),
    { manual: true }
  );

  const content = `## 请求调用工具\`${server_name}:${tool_name}\`\n\`\`\`json\n${args}\n\`\`\``;

  return (
    <div className="flex flex-col gap-2">
      <Markdown className="w-[100vw] max-w-full">{content}</Markdown>
      <div className="flex justify-end gap-2">
        <Button loading={loading} onClick={() => run()}>
          调用
        </Button>
        <Button className="bg-red-500">取消</Button>
      </div>
    </div>
  );
}
