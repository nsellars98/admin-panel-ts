export interface Product {
    id: string,
    title?: string,
    status?: boolean,
    price?: string,
    collections?: string[],
    tags?: string[],
    options?: string[]
}

export interface Subscriptions {
    id: string,
    title: string,
    status: boolean,
    price: string,
    collections?: string[],
    tags: string[],
    options?: string[]
    email: string,
    first_name: string,
    last_name: string
}

export interface ProductList {
    size: number,
    list: Product[]
}