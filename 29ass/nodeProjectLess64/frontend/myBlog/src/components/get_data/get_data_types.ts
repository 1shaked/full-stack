import {z} from 'zod'
export interface BlogInterface {
    message: string;
    params: {
        id: string;
    };
    data: {
        id: number;
        title: string;
        content: string;
    };
    query: Record<string, any>;
};

export const BlogSchemaResponseZod = z.object({
  message: z.string(),
  params: z.object({
    id: z.string(),
  }),
  data: z.object({
    id: z.number(),
    title: z.string(),
    content: z.string(),
  }),
  query: z.record(z.any()),
});

export type BlogResponseType = z.infer<typeof BlogSchemaResponseZod>;


export interface BlogContentInterface {
    id: number;
    title: string;
    content: string;
}
