export interface BlogPost {
  id: number;
  title: string;
  content: string;
  url: string; // external URL
  date: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "2D Array Allocation in C",
    content:
      "Different ways to allocate 2D arrays in C with performance consideration in HPC.",
    url: "https://springbound.notion.site/2D-Array-Allocation-in-C-with-Performance-Consideration-in-HPC-2bfe5d67dda6800bb4c9e9fa8a4217b3?pvs=74",
    date: "2025-12-04",
  },
  {
    id: 2,
    title: "Profiling HPC Programs",
    content: "Sampling and tracking based profiling for HPC applications.",
    url: "https://springbound.notion.site/Profiling-HPC-Programs-2ace5d67dda680d6816ac299cdb3ddca",
    date: "2025-11-25",
  },
  {
    id: 3,
    title: "Memory & Program Performance: Cache Locality",
    content: "Importance of cache locality in program performance.",
    url: "https://springbound.notion.site/Memory-Program-Performance-Cache-Locality-2a5e5d67dda680f5a77cf5b5c2afc101",
    date: "2025-11-20",
  },
];
