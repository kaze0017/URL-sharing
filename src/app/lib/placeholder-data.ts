// person model
import { Person } from "./interfaces";
import { SharedLinkType } from "./interfaces";
// data
export const people: Person[] = [
  {
    id: 1,
    name: "John Doe",
    title: "CEO",
    photo: "https://randomuser.me/api/portraits/men/97.jpg",
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
    class: "link",
    title: "Beautiful Sunset",
    type: "image",
    linkUrls: {
      primary: {
        url: "https://www.pexels.com/photo/sunset-dawn-sun-dusk-17679/",
        health: "healthy",
      },
    },
    popularity: 8,
    views: 1000,
    saved: false,
    rankCount: 10,
    sharedCount: 20,
    savedCount: 30,

    description: "A stunning sunset over the horizon.",
    publicationDate: "2021-10-01",
    tags: ["sunset", "nature", "landscape"],
    owner: people[3],
    thumbnail: "/defaults/thumbnails/th1.jpg",
    audience: "public",
  },
  {
    id: 1,

    title: "Amazing Nature Video",
    class: "link",
    type: "video",
    linkUrls: {
      primary: {
        url: "https://www.youtube.com/watch?v=2-aiSQuZwTY",
        health: "healthy",
      },
    },
    popularity: 9,
    views: 5000,

    rankCount: 10,
    sharedCount: 20,
    savedCount: 30,

    saved: false,
    description: "Experience the beauty of nature in this breathtaking video.",
    publicationDate: "2021-10-02",
    tags: ["nature", "video", "landscape"],
    owner: people[1],
    thumbnail: "/defaults/thumbnails/th2.jpg",
    audience: "private",
  },
  {
    id: 2,

    title: "Cute Puppy",
    class: "category",
    type: "image",
    linkUrls: {
      primary: {
        url: "https://www.pexels.com/photo/adorable-animal-beagle-canine-302083/",
        health: "healthy",
      },
    },
    popularity: 7,
    views: 2000,
    rankCount: 5,
    sharedCount: 15,
    savedCount: 25,
    saved: false,
    description: "An adorable beagle puppy.",
    publicationDate: "2021-10-03",
    tags: ["puppy", "dog", "animal"],
    owner: people[2],
    thumbnail: "/defaults/thumbnails/th3.jpg",
    audience: "protected",
  },
  {
    id: 3,
    title: "Epic Travel Adventure",
    class: "link",
    type: "video",
    linkUrls: {
      primary: {
        url: "https://www.youtube.com/watch?v=l9U4RQmIfck",
        health: "healthy",
      },
    },
    popularity: 10,
    views: 10000,
    rankCount: 15,
    sharedCount: 25,
    savedCount: 35,

    saved: false,
    description: "Join us on an epic adventure around the world!",
    publicationDate: "2021-10-04",
    tags: ["travel", "adventure", "video"],
    owner: people[3],
    thumbnail: "/defaults/thumbnails/th4.jpg",
    audience: "public",
  },
  {
    id: 4,
    title: "Starry Night Sky",
    class: "category",
    type: "image",
    linkUrls: {
      primary: {
        url: "https://www.pexels.com/photo/starry-night-102733/",
        health: "healthy",
      },
    },
    popularity: 6,
    views: 1500,
    savedCount: 20,
    seenCount: 30,
    rankCount: 5,
    sharedCount: 25,
    saved: false,
    description: "A mesmerizing view of the night sky filled with stars.",
    publicationDate: "2021-10-05",
    tags: ["night", "sky", "stars"],

    owner: people[4],
    thumbnail: "/defaults/thumbnails/th5.jpg",
    audience: "private",
  },
  {
    id: 5,
    title: "Cooking Tutorial",
    class: "link",
    type: "video",
    linkUrls: {
      primary: {
        url: "https://www.youtube.com/watch?v=vd_8P3-t1Sg",
        health: "healthy",
      },
    },
    popularity: 8,
    views: 3000,
    savedCount: 20,
    seenCount: 30,
    sharedCount: 25,
    rankCount: 5,
    saved: false,
    description: "Learn to cook delicious meals with this easy tutorial.",
    publicationDate: "2021-10-06",
    tags: ["cooking", "tutorial", "video"],
    owner: people[5],
    thumbnail: "/defaults/thumbnails/th6.jpg",
    audience: "protected",
  },
  {
    id: 6,
    title: "Mountain Landscape",
    class: "category",
    type: "image",
    linkUrls: {
      primary: {
        url: "https://www.pexels.com/photo/green-mountain-photography-3641348/",
        health: "healthy",
      },
    },
    popularity: 7,
    views: 1800,
    savedCount: 20,
    seenCount: 30,
    sharedCount: 40,
    rankCount: 5,
    saved: false,
    description: "A scenic view of mountains covered in lush greenery.",
    publicationDate: "2021-10-07",
    tags: ["mountain", "landscape", "nature"],
    owner: people[6],
    thumbnail: "/defaults/thumbnails/th7.jpg",
    audience: "public",
  },
  {
    id: 7,
    title: "Funny Cat Compilation",
    class: "link",
    type: "image",
    linkUrls: {
      primary: {
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        health: "healthy",
      },
    },
    popularity: 9,
    views: 4000,
    savedCount: 20,
    seenCount: 30,
    rankCount: 5,
    sharedCount: 37,
    saved: false,
    description: "Laugh out loud with this hilarious cat compilation!",
    publicationDate: "2021-10-08",
    tags: ["cat", "funny", "video"],
    owner: people[7],
    thumbnail: "/defaults/thumbnails/th8.jpg",
    audience: "private",
  },
  {
    id: 8,
    title: "Autumn Leaves",
    class: "category",
    type: "image",
    savedCount: 20,
    seenCount: 30,
    sharedCount: 42,
    rankCount: 5,
    linkUrls: {
      primary: {
        url: "https://www.pexels.com/photo/autumn-leaves-1092751/",
        health: "healthy",
      },
    },
    popularity: 7,
    views: 1700,
    saved: false,
    description: "Colorful autumn leaves on the ground.",
    publicationDate: "2021-10-09",
    tags: ["autumn", "leaves", "nature"],
    owner: people[8],
    thumbnail: "/defaults/thumbnails/th9.jpg",
    audience: "protected",
  },
  {
    id: 9,
    title: "Gaming Highlights",
    class: "link",
    type: "video",
    linkUrls: {
      primary: {
        url: "https://www.youtube.com/watch?v=g5Qt5lVJUks",
        health: "healthy",
      },
    },
    popularity: 8,
    savedCount: 20,
    seenCount: 30,
    rankCount: 5,
    sharedCount: 50,
    views: 3500,
    saved: false,
    description: "Watch the best gaming moments in this exciting video!",
    publicationDate: "2021-10-10",
    tags: ["gaming", "highlights", "video"],
    owner: people[9],
    thumbnail: "/defaults/thumbnails/th10.jpg",
    audience: "public",
  },
  {
    id: 10,
    title: "Cooking Tutorial",
    class: "category",
    type: "video",
    linkUrls: {
      primary: {
        url: "https://www.youtube.com/watch?v=vd_8P3-t1Sg",
        health: "healthy",
      },
    },
    popularity: 8,
    savedCount: 20,
    seenCount: 30,
    sharedCount: 55,
    rankCount: 5,
    views: 3000,
    saved: false,
    description: "Learn to cook delicious meals with this easy tutorial.",
    publicationDate: "2021-10-11",
    tags: ["cooking", "tutorial", "video"],
    owner: people[5],
    thumbnail: "/defaults/thumbnails/th11.jpg",
    audience: "private",
  },
  {
    id: 11,
    title: "Mountain Landscape",
    class: "link",
    type: "video",
    linkUrls: {
      primary: {
        url: "https://www.pexels.com/photo/green-mountain-photography-3641348/",
        health: "healthy",
      },
    },
    popularity: 7,
    savedCount: 20,
    seenCount: 30,
    sharedCount: 60,
    rankCount: 5,
    views: 1800,
    saved: false,
    description: "A scenic view of mountains covered in lush greenery.",
    publicationDate: "2021-10-12",
    tags: ["mountain", "landscape", "nature"],
    owner: people[6],
    thumbnail: "/defaults/thumbnails/th12.jpg",
    audience: "protected",
  },
  {
    id: 12,
    title: "Funny Cat Compilation",
    class: "category",
    type: "video",
    linkUrls: {
      primary: {
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        health: "healthy",
      },
    },
    popularity: 9,
    views: 4000,
    savedCount: 20,
    seenCount: 30,
    sharedCount: 65,
    rankCount: 5,
    saved: false,
    description: "Laugh out loud with this hilarious cat compilation!",
    publicationDate: "2021-10-13",
    tags: ["cat", "funny", "video"],
    owner: people[7],
    thumbnail: "/defaults/thumbnails/th13.jpg",
    audience: "public",
  },
  {
    id: 13,
    title: "Autumn Leaves",
    class: "link",
    type: "image",
    linkUrls: {
      primary: {
        url: "https://www.pexels.com/photo/autumn-leaves-1092751/",
        health: "healthy",
      },
    },
    popularity: 7,
    views: 1700,
    saved: false,
    savedCount: 20,
    seenCount: 30,
    sharedCount: 70,
    rankCount: 5,
    description: "Colorful autumn leaves on the ground.",
    publicationDate: "2021-10-14",
    tags: ["autumn", "leaves", "nature"],
    owner: people[8],
    thumbnail: "/defaults/thumbnails/th14.jpg",
    audience: "protected",
  },
  {
    id: 14,
    title: "Gaming Highlights",
    class: "category",
    type: "video",
    linkUrls: {
      primary: {
        url: "https://www.youtube.com/watch?v=g5Qt5lVJUks",
        health: "healthy",
      },
    },
    popularity: 8,
    views: 3500,
    saved: false,
    savedCount: 20,
    seenCount: 30,
    rankCount: 5,
    sharedCount: 75,
    description: "Watch the best gaming moments in this exciting video!",
    publicationDate: "2021-10-15",
    tags: ["gaming", "highlights", "video"],
    owner: people[9],
    thumbnail: "/defaults/thumbnails/th15.jpg",
    audience: "public",
  },
];

export const thumbnails = [
  {
    url: "/defaults/thumbnails/th1.jpg",
    tags: ["sunset", "nature", "landscape"],
  },
  {
    url: "/defaults/thumbnails/th2.jpg",
    tags: ["nature", "video", "landscape"],
  },
  {
    url: "/defaults/thumbnails/th3.jpg",
    tags: ["puppy", "dog", "animal"],
  },
  {
    url: "/defaults/thumbnails/th4.jpg",
    tags: ["travel", "adventure", "video"],
  },
  {
    url: "/defaults/thumbnails/th5.jpg",
    tags: ["night", "sky", "stars"],
  },
  {
    url: "/defaults/thumbnails/th6.jpg",
    tags: ["cooking", "tutorial", "video"],
  },
  {
    url: "/defaults/thumbnails/th7.jpg",
    tags: ["mountain", "landscape", "nature"],
  },
  {
    url: "/defaults/thumbnails/th8.jpg",
    tags: ["cat", "funny", "video"],
  },
  {
    url: "/defaults/thumbnails/th9.jpg",
    tags: ["autumn", "leaves", "nature"],
  },
  {
    url: "/defaults/thumbnails/th10.jpg",
    tags: ["gaming", "highlights", "video"],
  },
  {
    url: "/defaults/thumbnails/th11.jpg",
    tags: ["cooking", "tutorial", "video"],
  },
  {
    url: "/defaults/thumbnails/th12.jpg",
    tags: ["mountain", "landscape", "nature"],
  },
  {
    url: "/defaults/thumbnails/th13.jpg",
    tags: ["cat", "funny", "video"],
  },
  {
    url: "/defaults/thumbnails/th14.jpg",
    tags: ["autumn", "leaves", "nature"],
  },
  {
    url: "/defaults/thumbnails/th15.jpg",
    tags: ["gaming", "highlights", "video"],
  },
];

export const user: Person = people[0];
