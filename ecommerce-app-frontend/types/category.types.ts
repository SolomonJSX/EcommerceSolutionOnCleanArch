// Базовый интерфейс, содержащий общие поля
import {GetProduct} from "@/types/product.types";

export interface CategoryBase {
    name: string; // [Required] в C# — в TS делаем обязательным
}

// Используется для получения данных (Read)
export interface GetCategory extends CategoryBase {
    id: string; // Guid -> string
    products?: GetProduct[] | null; // ICollection -> Array, ? -> опционально
}

// Используется для создания (Create)
// В C# он пустой и просто наследует Name, в TS делаем так же
export type CreateCategory = CategoryBase;

// Используется для обновления (Update)
export interface UpdateCategory extends CategoryBase {
    id: string; // [Required] Guid -> string
}