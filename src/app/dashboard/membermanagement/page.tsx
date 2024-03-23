"use client";
import React, { useEffect } from "react";
import {
  forceSimulation,
  forceLink,
  forceManyBody,
  forceCenter,
  SimulationNodeDatum,
  select,
} from "d3";
import { getNPeople } from "@/app/lib/actions";

interface Node extends SimulationNodeDatum {
  id: string;
  photo?: string;
}

const people = getNPeople(7);

interface Link {
  source: string;
  target: string;
}

const NODES: Node[] = [
  { id: "A", photo: people[6].photo },
  { id: "B", photo: people[1].photo },
  { id: "C", photo: people[2].photo },
  { id: "D", photo: people[3].photo },
  { id: "E", photo: people[4].photo },
  { id: "F", photo: people[5].photo },
];
console.log(people);

const LINKS: Link[] = [
  { source: "A", target: "B" },
  { source: "A", target: "C" },
  { source: "B", target: "D" },
  { source: "B", target: "E" },
  { source: "C", target: "F" },
];

const Page: React.FC = () => {
  useEffect(() => {
    const svg = select("#container");
    const width = +svg.attr("width");
    const height = +svg.attr("height");
    const centerX = width / 2;
    const centerY = height / 2;
    const simulation = forceSimulation<Node>()
      .nodes(NODES)
      .force("charge", forceManyBody())
      .force(
        "link",
        forceLink(LINKS)
          .id((node) => (node as any).id)
          .distance(60)
      )
      .force("center", forceCenter(centerX, centerY));

    // const circles = svg
    //   .selectAll("circle")
    //   .data(NODES)
    //   .enter()
    //   .append("circle")
    //   .attr("r", 5);

    const links = svg
      .selectAll("line")
      .data(LINKS)
      .enter()
      .append("line")
      .attr("stroke", "blue");

    const images = svg
      .selectAll("image")
      .data(NODES)
      .enter()
      .append("image")
      .attr("width", 30)
      .attr("height", 30)
      .attr("xlink:href", (node) => (node as any).image)
      .style("border-radius", "50%")
      .style("clip-path", "circle(50% at 50% 50%)");

    simulation.on("tick", () => {
      // circles
      //   .attr("cx", (node) => (node as any).x)
      //   .attr("cy", (node) => (node as any).y);
      links
        .attr("x1", (link) => (link.source as any).x)
        .attr("y1", (link) => (link.source as any).y)
        .attr("x2", (link) => (link.target as any).x)
        .attr("y2", (link) => (link.target as any).y);

      images
        .attr("x", (node) => (node as any).x - 12)
        .attr("y", (node) => (node as any).y - 12)
        .attr("xlink:href", (node) => (node as any).photo);
    });
  }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

  return (
    <div>
      <svg width="600" height="400" id="container" />
    </div>
  );
};

export default Page;
