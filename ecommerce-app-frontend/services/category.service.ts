import {CreateCategory, GetCategory, UpdateCategory} from "@/types/category.types";
import {$api} from "@/lib/axios";


export const CategoryService = {
    async getAll() {
        // Твой роут: [HttpGet("all")] в ProductController
        // Итоговый URL: /Product/all
        const { data } = await $api.get<GetCategory[]>('/Category/all');
        return data;
    },

    async getSingle(id: string) {
        const { data } = await $api.get<GetCategory>(`/Category/single/${id}`);
        return data;
    },

    async create(dto: CreateCategory) {
        const { data } = await $api.post('/Category/add', dto);
        return data;
    },

    async update(dto: UpdateCategory) {
        const { data } = await $api.put('/Category/update', dto);
        return data;
    },

    async delete(id: string) {
        const { data } = await $api.delete(`/Category/delete/${id}`);
        return data;
    }
};