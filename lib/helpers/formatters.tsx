export const numberFormat = (value: number) =>{
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'USD'
    }).format(value);
}

export const percentageFormatter = (value: number) =>{
    return Math.round(value*10000)/100;
}

