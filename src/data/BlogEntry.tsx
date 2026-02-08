export interface BlogPost {
    title: string;
    content: string;
    url: string; // external URL
    date: string;
}

export const blogPosts: BlogPost[] = [
    {
        title: "HPC and Interconnect",
        content: "Notes regarding the interconnect in high performance computing. Discussion regarding the tradeoff between latency and bandwidth",
        url: "https://springbound.notion.site/HPC-Interconnect-2fbe5d67dda68047bc0aee5d70959f14?source=copy_link",
        date: "2026-2-8",
    },
    {
        title: "2D Array Allocation in C",
        content:
            "Different ways to allocate 2D arrays in C with performance consideration in HPC.",
        url: "https://springbound.notion.site/2D-Array-Allocation-in-C-with-Performance-Consideration-in-HPC-2bfe5d67dda6800bb4c9e9fa8a4217b3?pvs=74",
        date: "2025-12-04",
    },
    {
        title: "Profiling HPC Programs",
        content: "Sampling and tracking based profiling for HPC applications.",
        url: "https://springbound.notion.site/Profiling-HPC-Programs-2ace5d67dda680d6816ac299cdb3ddca",
        date: "2025-11-25",
    },
    {
        title: "Memory & Program Performance: Cache Locality",
        content: "Importance of cache locality in program performance.",
        url: "https://springbound.notion.site/Memory-Program-Performance-Cache-Locality-2a5e5d67dda680f5a77cf5b5c2afc101",
        date: "2025-11-20",
    }
];
