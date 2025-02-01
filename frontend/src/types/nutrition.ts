export interface Item {
    id: string;
    name: string;
    calories: number;
}

export interface NutritionData {
    [key: string]: Item[];
}
