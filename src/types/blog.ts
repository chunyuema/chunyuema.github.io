export type PillarId = 'availability' | 'observability' | 'hpc';

export interface BlogPost {
    title: string;
    content: string;
    url: string; // external URL
    date: string;
    tags: string[];
    pillarId?: PillarId;
}
