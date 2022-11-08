export interface Customer {
    id: string,
    first_name: string,
    last_name: string,
    email: string,
    status: boolean,
    tags: string[],
    total_orders: number,
    total_value: number,
    
}