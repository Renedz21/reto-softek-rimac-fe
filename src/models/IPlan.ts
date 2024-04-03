export interface IPlan {
    name: string;
    price: number;
    description: string[];
    age: number;
}

export interface IPlanList {
    list: IPlan[];
}