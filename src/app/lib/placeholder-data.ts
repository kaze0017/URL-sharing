// person model
import { Person } from "./interfaces";
import { SharedLinkType } from "./interfaces";
// data
export const people: Person[] = [
  {
    id: 1,
    name: "John Doe",
    title: "CEO",
    photo: "https://randomuser.me/api",
    followers: 100,
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
      categories: ["Business", "Leadership", "Technology", "Finance"],
    },
  },
  {
    id: 2,
    name: "Julio Rodriguez",
    title: "Individual Public Figure",
    photo: "https://randomuser.me/api/portraits/men/93.jpg",
    followers: 200,
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
    followers: 300,
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
    followers: 400,
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
    followers: 500,
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
  // New people
  {
    id: 6,
    name: "Jessica Davis",
    title: "CMO",
    photo: "https://randomuser.me/api/portraits/women/83.jpg",
    followers: 600,
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
  {
    id: 7,
    name: "William Johnson",
    title: "Marketing Manager",
    photo: "https://randomuser.me/api/portraits/men/91.jpg",
    followers: 700,
    publications: {
      links: [
        {
          title: "Marketing Strategies",
          url: "https://example.com",
        },
      ],
      categories: ["Marketing", "Leadership"],
    },
  },
  {
    id: 8,
    name: "Emma White",
    title: "HR Manager",
    photo: "https://randomuser.me/api/portraits/women/85.jpg",
    followers: 800,
    publications: {
      links: [
        {
          title: "Effective Hiring Practices",
          url: "https://example.com",
        },
      ],
      categories: ["Human Resources", "Leadership"],
    },
  },
  {
    id: 9,
    name: "Daniel Taylor",
    title: "Software Engineer",
    photo: "https://randomuser.me/api/portraits/men/92.jpg",
    followers: 900,
    publications: {
      links: [
        {
          title: "Modern Software Development",
          url: "https://example.com",
        },
      ],
      categories: ["Technology", "Software Engineering"],
    },
  },
  {
    id: 10,
    name: "Olivia Martinez",
    title: "Product Manager",
    photo: "https://randomuser.me/api/portraits/women/87.jpg",
    followers: 1000,
    publications: {
      links: [
        {
          title: "Product Management Strategies",
          url: "https://example.com",
        },
      ],
      categories: ["Product Management", "Leadership"],
    },
  },
];

// Shared Links

export const sharedLinks: SharedLinkType[] = [
  {
    id: 0,
    title: "Workout Music 2024",
    type: "video",
    url: "https://youtu.be/UMrG3YaV74o?feature=shared",
    popularity: 10,
    views: 5,
    saved: false,
    description:
      "Workout Music 2024 🔥 Best Gym Music 2024 🔥 Gym Female Music Motivation",
    health: "healthy",
    owner: people[1],
  },
  {
    id: 1,
    title: "Gyms Are Going Bankrupt As 60% Of Men Are Boycotting Gyms",
    type: "video",
    url: "https://www.youtube.com/watch?v=xL84oFmggcY&ab_channel=Manhood",
    popularity: 8,
    views: 15,
    saved: false,
    description:
      "*This video does not promote hate or harm of any person based on their gender, relationship status, race or class. The goals of this video is to promote healthy choices specifically for men in lifestyle, finances and in emotional relationships. *This video is designed for entertainment and information purposes only. All advice discussed in this video (and this channel) are my personal opinions and are based on my personal experiences. I am not a licensed therapist, psychologist, marriage counselor, medical doctor, dietician or financial advisor.",
    health: "healthy",
    owner: people[2],
  },
  {
    id: 2,
    title: "person swimming on body of water",
    type: "image",
    url: "https://www.pexels.com/photo/person-swimming-on-body-of-water-863988/",
    popularity: 8,
    views: 15,
    thumbnail:
      "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    saved: false,
    description: "",
    health: "healthy",
    owner: people[3],
  },
];

export const user: Person = people[0];
