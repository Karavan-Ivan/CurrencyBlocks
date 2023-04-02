import { Button } from '@mui/material'
import Grid from '@mui/material/Grid'
import productsArray from 'utils/productsArray'
import ProductsItem from './ProductsItem'

type Props = {
    buyProduct: (price: number) => void
}

const Products = ({ buyProduct }: Props) => {
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
                        currency={product.currency}
                        price={product.price}
                        buyProduct={buyProduct}
                    />
                </Grid>
            ))}
        </Grid>
    )
}

export default Products
