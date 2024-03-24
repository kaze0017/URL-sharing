"use client";
import React, { useEffect, useState } from "react";
import { select, hierarchy, tree, linkVertical, drag } from "d3";
import { getNPeople } from "@/app/lib/actions";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDrag } from "react-dnd";
import { useDrop } from "react-dnd";

const people = getNPeople(7);

const orgData = {
  id: 31,
  name: "John Doe",
  photo: people[4].photo,
  children: [
    {
      id: 32,
      name: "Jane Smith",
      photo: people[2].photo,
      children: [
        {
          id: 33,
          name: "John Smith",
          photo: people[3].photo,
          children: [
            {
              id: 34,
              name: "Jane Doe",
              photo: people[4].photo,
            },
            {
              id: 35,
              name: "Jane Doe",
              photo: people[5].photo,
            },
          ],
        },
      ],
    },
    {
      id: 36,
      name: "Jane Smith",
      photo: people[6].photo,
    },
    {
      id: 37,
      name: "Jane Smith",
      photo: people[3].photo,
      children: [
        {
          id: 38,
          name: "John Smith",
          photo: people[6].photo,
          children: [
            {
              id: 39,
              name: "Jane Doe",
              photo: people[5].photo,
            },
            {
              id: 40,
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
  draggedData: any;
}

function TreeChart({ data, draggedData }: TreeChartProps) {
  const svgRef = React.useRef<SVGSVGElement>(null);
  const [datatoRender, setDatatoRender] = useState<TreeNode>(data);

  useEffect(() => {
    const offset = 25;
    const svg = select(svgRef.current);
    svg.selectAll("*").remove();

    const root = hierarchy(datatoRender);
    const treeLayout = tree<TreeNode>();
    treeLayout.size([400, 500]);

    interface dragHandler {
      (event: any): void;
    }

    const dragHandler = drag<SVGGElement, d3.HierarchyPointNode<any>>()
      .on("drag", function (event) {
        select(this)
          .attr("x", event.x - 25)
          .attr("y", event.y);
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
      .attr("data-type", "node")
      .call(dragHandler as any);

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
    console.log("rendered");
  }, [datatoRender]);

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    select("svg").classed("drag-over", true);
  };

  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    select("svg").classed("drag-over", false);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    select("svg").classed("drag-over", false);

    // Retrieve the drag data from the dataTransfer object
    const dragDataString = e.dataTransfer.getData("application/json");
    const dragData: DragData = JSON.parse(dragDataString);

    // Access the dragObject from the drag data
    // console.log("Dropped object name:", dragData.dragObject);
    // console.log("Dropped on:", e.target);
    // console.log("Target type:", e.target.getAttribute("data-type"));
    if (e.target.getAttribute("data-type") === "node") {
      console.log(dragData.dragObject.id);
      console.log(e.target.getAttribute("data-id"));
      const tempData = { ...datatoRender };
      // Find the node with the id
      
    }
  };

  return (
    <div
      className="mt-4 p-4"
      onDrop={(e) => onDrop(e)}
      onDragLeave={(e) => onDragLeave(e)}
      onDragOver={(e) => onDragOver(e)}
    >
      <svg ref={svgRef} width={900} height={900}>
        {/* Render tree chart here */}
      </svg>
    </div>
  );
}

export default function page() {
  const [data, setData] = useState<TreeNode>(orgData);
  const [draggedData, setDragData] = useState(null);

  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <div className="flex">
          <DraggableBlocks setDragData={(dragData) => setDragData(dragData)} />
          <TreeChart data={data} draggedData={draggedData} />
        </div>
      </DndProvider>
    </div>
  );
}

// Define interface for block data
interface Person {
  id: number;
  name: string;
  photo: string;
}

// Define interface for drag data
interface DragData {
  dragObject: Person;
}

// Define DraggableProps interface
interface DraggableProps {
  children: React.ReactNode;
  dragObject: Person;
  onDragStart: (dragData: DragData) => void;
  onDragEnd: () => void;
}

// Draggable Component
const Draggable: React.FC<DraggableProps> = ({
  children,
  dragObject,
  onDragStart,
  onDragEnd,
}) => {
  const onDragStarting = (
    e: React.DragEvent<HTMLDivElement>,
    dragObject: Person
  ) => {
    // Set the data to be transferred
    e.dataTransfer.setData("application/json", JSON.stringify({ dragObject }));

    // Call the onDragStart handler with the drag data
    onDragStart({ dragObject });
  };

  const onDragEnding = (e: React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onDragEnd();
  };

  return (
    <div
      draggable={true}
      onDragStart={(e) => onDragStarting(e, dragObject)}
      onDragEnd={onDragEnding}
    >
      {children}
    </div>
  );
};

// DraggableBlocks Component
const DraggableBlocks: React.FC<{
  setDragData: (dragData: DragData) => void;
}> = ({ setDragData }) => {
  const blocks: Person[] = [
    { id: 21, name: "John Doe", photo: people[1].photo },
    { id: 22, name: "Jane Smith", photo: people[2].photo },
    { id: 23, name: "John Smith", photo: people[3].photo },
    { id: 24, name: "Jane Doe", photo: people[4].photo },
    { id: 25, name: "Jane Doe", photo: people[5].photo },
    { id: 26, name: "Jane Doe", photo: people[6].photo },
  ];
  const onDragStart = (dragData: DragData) => {
    setDragData(dragData);
  };

  const onDragEnd = () => {
    // Implement any logic needed on drag end
  };

  return (
    <div className="dragging-blocks">
      {blocks.map((b, index) => (
        <Draggable
          key={index}
          dragObject={b}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
        >
          <img src={b.photo} alt={b.name} />
        </Draggable>
      ))}
    </div>
  );
};
