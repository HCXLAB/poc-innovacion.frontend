export interface Idea {
    id?: string;
    title?: string;
    slug?: string;
    description?: string;
    category?: string;
    date?: Date;
    steps?: {
        order?: number;
        title?: string;
        subtitle?: string;
        content?: string;
    }[];
    totalSteps?: number;
    updatedAt?: number;
    featured?: boolean;
    progress?: {
        currentStep?: number;
        completed?: number;
    };
}
