import { Button } from '@mui/material'
import Grid from '@mui/material/Grid'
import productsArray from 'utils/productsArray'
import ProductsItem from './ProductsItem'
import { access } from 'fs/promises'

type Props = {
    buyProduct: (price: number) => void
    changeCurrencyUSD: (currency: string) => void
    currencyAll: {
        currency: string
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
                        price={product.price}
                        buyProduct={buyProduct}
                    />
                </Grid>
            ))}
        </Grid>
    )
}

export default Products
