import { $api } from '@/lib/axios';
import { CreateProduct, GetProduct, UpdateProduct } from '@/types/product.types';

export const ProductService = {
    async getAll() {
        // Твой роут: [HttpGet("all")] в ProductController
        // Итоговый URL: /Product/all
        const { data } = await $api.get<GetProduct[]>('/Product/all');
        return data;
    },

    async getSingle(id: string) {
        const { data } = await $api.get<GetProduct>(`/Product/single/${id}`);
        return data;
    },

    async create(dto: CreateProduct) {
        const { data } = await $api.post('/Product/add', dto);
        return data;
    },

    async update(dto: UpdateProduct) {
        const { data } = await $api.put('/Product/update', dto);
        return data;
    },

    async delete(id: string) {
        const { data } = await $api.delete(`/Product/delete/${id}`);
        return data;
    }
};