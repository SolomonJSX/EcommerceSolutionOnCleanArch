export interface Checkout {
    paymentMethod: string;
    carts: ProcessCart[];
}

export interface ProcessCart {
    productId: string;
    quantity: number;
}