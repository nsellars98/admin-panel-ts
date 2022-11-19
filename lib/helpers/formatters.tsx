export const numberFormat = (value: number) =>{
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'USD'
    }).format(value);
}