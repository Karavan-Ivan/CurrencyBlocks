import { Container } from '@mui/material'
import Header from './Header/Header'
import Main from './Main/Main'
import { useState } from 'react'
import { Product } from 'utils/productsArray'

type Props = {}

type TotalPriceProductsProps = {
    totalPrice: number
}

type CurrencyProps = {
    currency: string
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

    const [currencyAll, setCurrencyAll] = useState<CurrencyProps>({
        currency: 'UAH',
    })
    const changeCurrencyUSD = (currency: string) => {
        setCurrencyAll(() => ({
            currency: 'USD',
        }))
    }
    const changeCurrencyUAH = (currency: string) => {
        setCurrencyAll(() => ({
            currency: 'UAH',
        }))
    }
    const changeCurrencyEUR = (currency: string) => {
        setCurrencyAll(() => ({
            currency: 'EUR',
        }))
    }
    const changeCurrencyPLN = (currency: string) => {
        setCurrencyAll(() => ({
            currency: 'PLN',
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
                changeCurrencyUSD={changeCurrencyUSD}
                changeCurrencyUAH={changeCurrencyUAH}
                changeCurrencyEUR={changeCurrencyEUR}
                changeCurrencyPLN={changeCurrencyPLN}
                currencyAll={currencyAll}
            />
        </Container>
    )
}

export default App
