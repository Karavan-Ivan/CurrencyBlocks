import Grid from '@mui/material/Grid'
import productsArray from 'utils/productsArray'
import ProductsItem from './ProductsItem'

type Props = {
    buyProduct: (price: number) => void
    changeCurrencyUSD: (currency: string, rate: number) => void
    currencyAll: {
        currency: string
        rate: number
    }
}

const Products = ({ buyProduct, changeCurrencyUSD, currencyAll }: Props) => {
    return (
        <Grid
            container
            direction="row"
            alignItems="stretch"
            spacing={2}
            sx={{ margin: '0' }}
        >
            {productsArray.map((product) => (
                <Grid item xs={4}>
                    <ProductsItem
                        title={product.title}
                        description={product.description}
                        currency={currencyAll.currency}
                        priceCard={product.price / currencyAll.rate}
                        price={product.price}
                        buyProduct={buyProduct}
                    />
                </Grid>
            ))}
        </Grid>
    )
}

export default Products
