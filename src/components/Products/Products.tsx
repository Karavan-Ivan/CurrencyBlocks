import { Button } from '@mui/material'
import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid'
import './Products.scss'

type Props = {}

const Products = (props: Props) => {
    return (
        <Grid container spacing={2} sx={{ margin: '0' }}>
            <Grid item xs={4}>
                <Item className="Product">
                    <h1>Name</h1>
                    <h3>Type</h3>
                    <h3>Price</h3>
                    <Button
                        variant="outlined"
                        size="small"
                        sx={{
                            borderColor: 'black',
                            color: 'black',
                            backgroundColor: 'aqua',
                        }}
                    >
                        Buy
                    </Button>
                </Item>
            </Grid>
            <Grid item xs={4}>
                <Item className="Product">
                    <h1>Name</h1>
                    <h3>Type</h3>
                    <h3>Price</h3>
                    <Button
                        variant="outlined"
                        size="small"
                        sx={{
                            borderColor: 'black',
                            color: 'black',
                            backgroundColor: 'aqua',
                        }}
                    >
                        Buy
                    </Button>
                </Item>
            </Grid>
            <Grid item xs={4}>
                <Item className="Product">
                    <h1>Name</h1>
                    <h3>Type</h3>
                    <h3>Price</h3>
                    <Button
                        variant="outlined"
                        size="small"
                        sx={{
                            borderColor: 'black',
                            color: 'black',
                            backgroundColor: 'aqua',
                        }}
                    >
                        Buy
                    </Button>
                </Item>
            </Grid>
        </Grid>
    )
}

export default Products
