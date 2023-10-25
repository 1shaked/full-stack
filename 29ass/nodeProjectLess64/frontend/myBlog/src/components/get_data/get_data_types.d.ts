export interface BlogInterface {
    message: "ItemRouterHandler";
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

export interface BlogContentInterface {
    id: number;
    title: string;
    content: string;
}
