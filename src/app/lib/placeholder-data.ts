// person model
import { Person } from "./interfaces";
// data
export const people: Person[] = [
  {
    id: 1,
    name: "John Doe",
    title: "CEO",
    photo: "https://randomuser.me/api",
    publications: {
      links: [
        {
          title: "How to be a CEO",
          url: "https://example.com",
        },
        {
          title: "How to be a CEO",
          url: "https://example.com",
        },
      ],
      categories: ["Business", "Leadership"],
    },
  },
  {
    id: 2,
    name: "Julio Rodriguez",
    title: "Individual Public Figure",
    photo: "https://randomuser.me/api/portraits/men/93.jpg",
    publications: {
      links: [
        {
          title: "How to be a Public Figure",
          url: "https://example.com",
        },
      ],
      categories: ["Public Figure", "Leadership"],
    },
  },
  {
    id: 3,
    name: "Jane Smith",
    title: "CTO",
    photo: "https://randomuser.me/api/portraits/women/93.jpg",
    publications: {
      links: [
        {
          title: "How to be a CTO",
          url: "https://example.com",
        },
      ],
      categories: ["Technology", "Leadership"],
    },
  },
  {
    id: 4,
    name: "Samantha Johnson",
    title: "CFO",
    photo: "https://randomuser.me/api/portraits/women/95.jpg",
    publications: {
      links: [
        {
          title: "How to be a CFO",
          url: "https://example.com",
        },
      ],
      categories: ["Finance", "Leadership"],
    },
  },
  {
    id: 5,
    name: "Michael Brown",
    title: "COO",
    photo: "https://randomuser.me/api/portraits/men/90.jpg",
    publications: {
      links: [
        {
          title: "How to be a COO",
          url: "https://example.com",
        },
      ],
      categories: ["Operations", "Leadership"],
    },
  },
  {
    id: 6,
    name: "Jessica Davis",
    title: "CMO",
    photo: "https://randomuser.me/api/portraits/women/83.jpg",
    publications: {
      links: [
        {
          title: "How to be a CMO",
          url: "https://example.com",
        },
      ],
      categories: ["Marketing", "Leadership"],
    },
  },
];

export const user: Person = people[0];
