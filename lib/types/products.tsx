export interface Product {
    id: string,
    title?: string,
    status?: boolean,
    price?: string,
    collections?: string[],
    tags?: string[],
    options?: string[]
}

export interface ProductList {
    size: number,
    list: Product[]
}