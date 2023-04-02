export type Product = {
    id: number
    title: string
    description: string
    price: number
    currency: string
}

const productsArray: Product[] = [
    {
        id: 1,
        title: 'IPhone 14 Pro',
        description: 'IPhone 14, Pro Blue Sea, 512GB',
        price: 45000,
        currency: 'UAH',
    },
    {
        id: 2,
        title: 'IPhone 13 Pro',
        description: 'IPhone 13 Pro, Dark Grey, 512GB ',
        price: 35000,
        currency: 'UAH',
    },
    {
        id: 3,
        title: 'IPhone 13 Pro Max',
        description: 'IPhone 13 Pro Max, Gold, 512GB',
        price: 40000,
        currency: 'UAH',
    },
]

export default productsArray
