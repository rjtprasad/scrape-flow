"use client";

import React from "react";

const NodeCard = ({
  children,
  nodeId,
}: {
  children: React.ReactNode;
  nodeId: string;
}) => {
  return <div>{children}</div>;
};

export default NodeCard;
