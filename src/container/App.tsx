import { Container } from '@mui/material'
import Header from './Header/Header'
import Main from './Main/Main'
import { useState } from 'react'

type Props = {}

type TotalPriceProductsProps = {
    totalPrice: number
}

const App = (props: Props) => {
    const [totalPriceProducts, setTotalPriceProducts] =
        useState<TotalPriceProductsProps>({
            totalPrice: 0,
        })

    const buyProduct = (price: number) => {
        setTotalPriceProducts((prevState) => ({
            totalPrice: prevState.totalPrice + price,
        }))
    }

    return (
        <Container
            sx={{
                width: '700px',
                height: '500px',
                backgroundColor: 'whitesmoke',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '5px',
                border: '2px solid black',
                gap: '20px',
            }}
        >
            <Header />
            <Main
                totalPriceProducts={totalPriceProducts}
                buyProduct={buyProduct}
            />
        </Container>
    )
}

export default App
