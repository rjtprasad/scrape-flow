import { memo } from "react";
import NodeCard from "./NodeCard";
import { NodeProps } from "@xyflow/react";

const NodeComponent = memo((props: NodeProps) => {
  return <NodeCard nodeId={props.id}>AppNode</NodeCard>;
});

export default NodeComponent;
NodeComponent.displayName = "NodeComponent";
