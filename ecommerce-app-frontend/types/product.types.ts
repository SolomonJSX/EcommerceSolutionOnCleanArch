// Базовый интерфейс, содержащий общие поля
import {GetCategory} from "@/types/category.types";

export interface ProductBase {
    name: string;
    description: string;
    price: number; // decimal в C# -> number в TS
    base64Image: string;
    quantity: number;
    categoryId: string; // Guid в C# -> string в TS
}

// Интерфейс для получения продукта (с ID и вложенной категорией)
export interface GetProduct extends ProductBase {
    id: string;
    category?: GetCategory | null; // Соответствует GetCategory?
}

// Интерфейс для создания (в C# он просто наследует базу)
export type CreateProduct = ProductBase;

// Интерфейс для обновления (база + ID)
export interface UpdateProduct extends ProductBase {
    id: string;
}
