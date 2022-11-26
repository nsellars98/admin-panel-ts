
export interface Orders {
    title: string,
    status: boolean,
    id: string,
    total_price: string,
    tags: string[],
    email: string,
    first_name: string,
    last_name: string
}    
export interface DraftOrders {
    title: string,
    status: boolean,
    id: string,
    total_price: string,
    tags: string[],
    email: string,
    first_name: string,
    last_name: string
}    


export interface Carts {
    title: string,
    status: boolean,
    id: string,
    total_price: string,
    tags: string[],
    email: string,
    first_name: string,
    last_name: string
}


export interface LineItem {
    title: string,
    status: boolean,
    id: string,
    url: string,
    price: number,
    tags: string[],
    compare_at_price: number,
    option1: string,
    option2: string,
    option3: string,
    quantity: number
}