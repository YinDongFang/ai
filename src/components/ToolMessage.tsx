import { useEffect, useState } from "react";
import { Bubble } from "./Bubble";
import { CytoscapeProvider, CytoscapeRender, useCytoscape } from "./Cytoscape";
import { Markdown } from "./Markdown";
import { Message, MessageProps } from "./Message";
import { read } from "../cytoscape/read";
import { useSchemaStyleLayer } from "./Cytoscape/hooks/useSchemaStyleLayer";
import { useBaseStyle } from "./Cytoscape/hooks/useBaseStyle";
import { useCreation } from "ahooks";
import cytoscape from "../cytoscape";

export function ToolMessage(props: MessageProps) {
  const {
    message: {
      tool: { server_name, tool_name, result },
    },
  } = props as any;

  const cy = useCreation(() => {
    return cytoscape({ styleEnabled: true, maxZoom: 2, minZoom: 0.5 });
  }, []);

  useEffect(() => {
    cy.add(
      read({
        ...result,
        relationships: result.relationships || result.edges || [],
      })
    );
    cy.layout({ name: "fcose", fit: true }).run();
  }, [result]);

  const [collapsed, setCollapsed] = useState(true);

  return (
    <CytoscapeProvider cy={cy}>
      <Message
        {...props}
        render={() => {
          return (
            <Bubble className="max-w-[80%]">
              <div className="flex flex-col gap-2 items-start">
                <span
                  role="button"
                  className="cursor-pointer px-2 py-1 rounded-md hover:bg-white"
                  onClick={() => setCollapsed(!collapsed)}
                >
                  {collapsed ? "查看结果" : "隐藏结果"}
                </span>
                <div style={{ display: collapsed ? "none" : "block" }}>
                  <Markdown className="w-[100vw] max-w-full">
                    {`## 工具\`${server_name}:${tool_name}调用结果：\`\n\`\`\`json\n${JSON.stringify(
                      result,
                      null,
                      2
                    )}\n\`\`\``}
                  </Markdown>
                </div>
                <div className="w-[100vw] max-w-full h-[400px] bg-white">
                  <CytoscapeRender />
                </div>
              </div>
            </Bubble>
          );
        }}
      />
    </CytoscapeProvider>
  );
}
