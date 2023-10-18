import * as d3 from "d3";

import React from "react";
import ReactFlow, { Background, useNodesState } from "reactflow";
import "reactflow/dist/style.css";

const Contact = () => {
  const initNodes = {
    name: "root",
    children: [
      { name: "child #1", children: [{ name: "grandchild #1" }] },
      { name: "child #2", children: [{ name: "grandchild #1" }] },
      {
        name: "child #3",
        children: [{ name: "grandchild #1" }, { name: "grandchild #2" }],
      },
    ],
  };
  const initEdges = [
    {
      id: "e1-2",
      source: "0",
      target: "1",
    },
    {
      id: "e1-3",
      source: "0",
      target: "2",
    },
    {
      id: "e1-4",
      source: "0",
      target: "3",
    },
    {
      id: "e1-5",
      source: "1",
      target: "4",
    },
    {
      id: "e1-6",
      source: "2",
      target: "5",
    },
    {
      id: "e1-7",
      source: "3",
      target: "6",
    },
    {
      id: "e1-8",
      source: "3",
      target: "7",
    },
  ];

  const hierarchy = d3.hierarchy({ ...initNodes });
  const treeLayout = d3.tree().nodeSize((d) => [d.width, d.height]);

  treeLayout(hierarchy);

  const updatedNodes = hierarchy.descendants();

  const newNode = updatedNodes.map((element, index) => {
    return {
      id: index.toString(),
      type: "custom",
      data: {
        label: 85,
      },
      position: { x: element.x, y: element.y },
    };
  });

  const [nodes, setNodes, onNodesChange] = useNodesState(newNode);

  return (
    <div className="h-screen">
      <ReactFlow nodes={nodes} edges={initEdges} onNodesChange={onNodesChange}>
        <Background />
      </ReactFlow>
    </div>
  );
};

export default Contact;
