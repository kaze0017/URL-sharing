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
    title: "Beautiful Sunset",
    type: "image",
    url: "https://www.pexels.com/photo/beautiful-sunset-6337471/",
    popularity: 8,
    views: 1000,
    saved: false,
    description: "A stunning sunset over the horizon.",
    health: "healthy",
    owner: people[0],
  },
  {
    id: 1,
    title: "Amazing Nature Video",
    type: "video",
    url: "https://www.youtube.com/watch?v=2-aiSQuZwTY",
    popularity: 9,
    views: 5000,
    saved: false,
    description: "Experience the beauty of nature in this breathtaking video.",
    health: "healthy",
    owner: people[1],
  },
  {
    id: 2,
    title: "Cute Puppy",
    type: "image",
    url: "https://www.pexels.com/photo/adorable-animal-beagle-canine-302083/",
    popularity: 7,
    views: 2000,
    saved: false,
    description: "An adorable beagle puppy.",
    health: "healthy",
    owner: people[2],
  },
  {
    id: 3,
    title: "Epic Travel Adventure",
    type: "video",
    url: "https://www.youtube.com/watch?v=l9U4RQmIfck",
    popularity: 10,
    views: 10000,
    saved: false,
    description: "Join us on an epic adventure around the world!",
    health: "healthy",
    owner: people[3],
  },
  {
    id: 4,
    title: "Starry Night Sky",
    type: "image",
    url: "https://www.pexels.com/photo/starry-night-102733/",
    popularity: 6,
    views: 1500,
    saved: false,
    description: "A mesmerizing view of the night sky filled with stars.",
    health: "healthy",
    owner: people[4],
  },
  {
    id: 5,
    title: "Cooking Tutorial",
    type: "video",
    url: "https://www.youtube.com/watch?v=vd_8P3-t1Sg",
    popularity: 8,
    views: 3000,
    saved: false,
    description: "Learn to cook delicious meals with this easy tutorial.",
    health: "healthy",
    owner: people[5],
  },
  {
    id: 6,
    title: "Mountain Landscape",
    type: "image",
    url: "https://www.pexels.com/photo/green-mountain-photography-3641348/",
    popularity: 7,
    views: 1800,
    saved: false,
    description: "A scenic view of mountains covered in lush greenery.",
    health: "healthy",
    owner: people[6],
  },
  {
    id: 7,
    title: "Funny Cat Compilation",
    type: "video",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    popularity: 9,
    views: 4000,
    saved: false,
    description: "Laugh out loud with this hilarious cat compilation!",
    health: "healthy",
    owner: people[7],
  },
  {
    id: 8,
    title: "Autumn Leaves",
    type: "image",
    url: "https://www.pexels.com/photo/autumn-leaves-1092751/",
    popularity: 7,
    views: 1700,
    saved: false,
    description: "Colorful autumn leaves on the ground.",
    health: "healthy",
    owner: people[8],
  },
  {
    id: 9,
    title: "Gaming Highlights",
    type: "video",
    url: "https://www.youtube.com/watch?v=g5Qt5lVJUks",
    popularity: 8,
    views: 3500,
    saved: false,
    description: "Watch the best gaming moments in this exciting video!",
    health: "healthy",
    owner: people[9],
  },
];

export const user: Person = people[0];
