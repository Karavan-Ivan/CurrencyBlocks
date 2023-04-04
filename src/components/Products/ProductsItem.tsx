import { Card, CardActions, CardContent } from '@mui/material'
import { Button } from '@mui/material'
import './Products.scss'

type Props = {
    title: string
    description: string
    price: number
    currency: string
    buyProduct: (price: number) => void
    priceCard: number
}

const ProductsItem = ({
    title,
    description,
    price,
    currency,
    buyProduct,
    priceCard,
}: Props) => {
    return (
        <Card variant="outlined" className="Product">
            <CardContent>
                <h1>{title}</h1>
                <h3>{description}</h3>
                <h3>
                    {currency}: {Math.round(priceCard)}
                </h3>
            </CardContent>
            <CardActions>
                <Button
                    variant="outlined"
                    size="small"
                    sx={{
                        borderColor: 'black',
                        color: 'black',
                        backgroundColor: 'aqua',
                    }}
                    onClick={() => buyProduct(price)}
                >
                    Buy
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductsItem
