"use client";
import React from "react";
import { getNPeople } from "@/app/lib/actions";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TreeChart from "@/app/ui/components/membermanagement/TreeChart";

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
  collapsed?: boolean;
}

export default function Page() {
  const data = orgData;
  // const [draggedData, setDragData] = useState<DragData | null>(null);

  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <div className="flex">
          <DraggableBlocks
          //  setDragData={(dragData) => setDragData(dragData)}
          />
          <TreeChart data={data} />
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
  // onDragStart: (dragData: DragData) => void;
  onDragEnd: () => void;
}

// Draggable Component
const Draggable: React.FC<DraggableProps> = ({
  children,
  dragObject,
  // onDragStart,
  onDragEnd,
}) => {
  const onDragStarting = (
    e: React.DragEvent<HTMLDivElement>,
    dragObject: Person
  ) => {
    // Set the data to be transferred
    e.dataTransfer.setData("application/json", JSON.stringify({ dragObject }));

    // Call the onDragStart handler with the drag data
    // onDragStart({ dragObject });
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
  // setDragData: (dragData: DragData) => void;
}> = (
  {
    //  setDragData
  }
) => {
  const blocks: Person[] = [
    { id: 21, name: "John Doe", photo: people[1].photo },
    { id: 22, name: "Jane Smith", photo: people[2].photo },
    { id: 23, name: "John Smith", photo: people[3].photo },
    { id: 24, name: "Jane Doe", photo: people[4].photo },
    { id: 25, name: "Jane Doe", photo: people[5].photo },
    { id: 26, name: "Jane Doe", photo: people[6].photo },
  ];
  // const onDragStart = (dragData: DragData) => {
  //   setDragData(dragData);
  // };

  const onDragEnd = () => {
    // Implement any logic needed on drag end
  };

  return (
    <div className="dragging-blocks">
      {blocks.map((b, index) => (
        <Draggable
          key={index}
          dragObject={b}
          // onDragStart={onDragStart}
          onDragEnd={onDragEnd}
        >
          <img src={b.photo} alt={b.name} />
        </Draggable>
      ))}
    </div>
  );
};
