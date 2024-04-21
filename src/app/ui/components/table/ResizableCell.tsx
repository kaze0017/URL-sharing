"use client";
import React, { useEffect, useRef } from "react";
import { inter } from "../../fonts";

interface ResizableCellProps {
  children: React.ReactNode;
}

export default function ResizableCell({ children }: ResizableCellProps) {
  const refCell = useRef<HTMLDivElement>(null);
  const refLeft = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const resizableCell = refCell.current;
    if (!resizableCell) return;
    const style = window.getComputedStyle(resizableCell);
    let width = parseInt(style.width, 10);
    let height = parseInt(style.height, 10);

    let xCord = 0;

    // Top
    const omMouseMoveLeftResize = (e: MouseEvent) => {
      const dx = xCord - e.clientX;
      xCord = e.clientX;
      width += dx;
      resizableCell.style.width = `${width}px`;
      console.log("dx", dx);
    };

    const onMouseUpLeftResize = () => {
      document.removeEventListener("mousemove", omMouseMoveLeftResize);
    };

    const onMouseDownLeftResize = (e: MouseEvent) => {
      xCord = e.clientX;
      const style = window.getComputedStyle(resizableCell);
      resizableCell.style.width = style.width;
      document.addEventListener("mousemove", omMouseMoveLeftResize);
      document.addEventListener("mouseup", onMouseUpLeftResize);
    };

    const resiZerLeft = refLeft.current;
    resiZerLeft?.addEventListener("mousedown", onMouseDownLeftResize);
  }, []);

  return (
    <div
      ref={refCell}
      className="resizable-cell text-center relative overflow-hidden border border-blue-400"
    >
      {children}
      <div
        ref={refLeft}
        className="resizer rl absolute top-0 left-0 border border-red-400 h-full w-2 bg-red-400 cursor-resize"
      ></div>
    </div>
  );
}
