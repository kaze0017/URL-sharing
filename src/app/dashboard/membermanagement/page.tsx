"use client";
import React, { useEffect, useState } from "react";
import { select, hierarchy, tree, linkVertical, drag } from "d3";
import { getNPeople } from "@/app/lib/actions";
import { any } from "zod";

const people = getNPeople(7);

const orgData = {
  id: 1,
  name: "John Doe",
  photo: people[4].photo,
  children: [
    {
      id: 2,
      name: "Jane Smith",
      photo: people[2].photo,
      children: [
        {
          id: 3,
          name: "John Smith",
          photo: people[3].photo,
          children: [
            {
              id: 4,
              name: "Jane Doe",
              photo: people[4].photo,
            },
            {
              id: 5,
              name: "Jane Doe",
              photo: people[5].photo,
            },
          ],
        },
      ],
    },
    {
      id: 6,
      name: "Jane Smith",
      photo: people[6].photo,
    },
    {
      id: 7,
      name: "Jane Smith",
      photo: people[3].photo,
      children: [
        {
          id: 8,
          name: "John Smith",
          photo: people[6].photo,
          children: [
            {
              id: 9,
              name: "Jane Doe",
              photo: people[5].photo,
            },
            {
              id: 10,
              name: "Jane Doe",
              photo: people[4].photo,
            },
          ],
        },
      ],
    },
  ],
};

interface TreeNode {
  id: number;
  name: string;
  photo: string;
  children?: TreeNode[];
}

interface TreeChartProps {
  data: TreeNode;
  setData: React.Dispatch<React.SetStateAction<TreeNode>>;
}

function TreeChart({ data, setData }: TreeChartProps) {
  const svgRef = React.useRef<SVGSVGElement>(null);
  const [datatoRender, setDatatoRender] = useState<TreeNode>(data);

  useEffect(() => {
    console.log("rendering tree chart");
    const offset = 25;
    const svg = select(svgRef.current);
    svg.selectAll("*").remove();

    const root = hierarchy(datatoRender);
    const treeLayout = tree<TreeNode>();
    treeLayout.size([400, 500]);

    const dragHandler = drag<SVGGElement, d3.HierarchyPointNode<any>>()
      .on("drag", function (event) {
        select(this).attr("x", event.x).attr("y", event.y);
      })
      .on("end", function (event) {
        // chech if the dragged element is in the trash area
        let deleteNode = false;
        if (
          event.x > 500 - 30 &&
          event.x < 500 + 30 &&
          event.y > 500 - 30 &&
          event.y < 500 + 30
        ) {
          deleteNode = true;
        }

        if (deleteNode) {
          const id = select(this).attr("data-id");
          setDatatoRender((prevData) => {
            const deleteNode = (node: TreeNode) => {
              if (node.children) {
                node.children = node.children.filter(
                  (child) => child.id !== +id
                );
                node.children.forEach(deleteNode);
              }
            };
            const newTree = { ...prevData };
            deleteNode(newTree);
            return newTree;
          });
          console.log("Deleted", id);
        } else {
          select(this).attr("x", select(this).attr("data-x"));
          select(this).attr("y", select(this).attr("data-y"));
        }
      });

    treeLayout(root);

    const linkGenerator = linkVertical()
      .source((link) => link.source)
      .target((link) => link.target)
      .x((node) => (node as any).x)
      .y((node) => (node as any).y + offset);

    // Links svg
    svg
      .selectAll<SVGPathElement, d3.HierarchyPointLink<any>>("path.link")
      .data(root.links())
      .enter()
      .append("path")
      .attr("class", "link")
      .attr("d", linkGenerator as any)
      .attr("stroke-dasharray", function () {
        const length: any = this.getTotalLength();
        return `${length} ${length}`;
      })
      .attr("stroke-offset", function () {
        const length: any = this.getTotalLength();
        return `${length}`;
      })
      .transition()
      .duration(1000)
      .attr("stroke-dashoffset", 0)
      .attr("fill", "none")
      .attr("stroke", "indigo");

    // Nodes photo
    svg
      .selectAll<SVGImageElement, d3.HierarchyPointNode<any>>("image")
      .data(root.descendants())
      .enter()
      .append("g") // Group for each photo and circle
      .append("image")
      .attr("xlink:href", (node) => (node.data as any).photo)
      .attr("x", (node) => (node as any).x - 25)
      .attr("y", (node) => (node as any).y - 25 + offset)
      .attr("width", 50)
      .attr("height", 50)
      .attr("clip-path", "circle(50%)")
      .attr("data-id", (node) => (node.data as any).id)
      .attr("data-x", (node) => (node as any).x - 25)
      .attr("data-y", (node) => (node as any).y - 25 + offset)
      .call(dragHandler);

    // Add a indigo color trash icon to the bottom right corner of the svg
    svg
      .append("image")
      .attr(
        "xlink:href",
        "https://img.icons8.com/material-outlined/50/946BB2/trash.png"
      )
      .attr("x", 500 - 25)
      .attr("y", 500 - 25)
      .attr("width", 50)
      .attr("height", 50);

    // Define drag handler function
  }, [datatoRender]);

  return (
    <div className="mt-4 p-4">
      <svg ref={svgRef} width={900} height={900}>
        {/* Render tree chart here */}
      </svg>
    </div>
  );
}

export default function page() {
  const [data, setData] = useState<TreeNode>(orgData);
  return (
    <div>
      <TreeChart data={data} setData={setData} />
    </div>
  );
}
