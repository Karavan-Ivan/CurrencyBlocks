import { Container } from '@mui/material'
import Header from './Header/Header'
import Main from './Main/Main'
import { useState } from 'react'
import productsArray from 'utils/productsArray'

type Props = {}

type TotalPriceProductsProps = {
    totalPrice: number
}

type CurrencyProps = {
    currency: string
    rate: number
}

const App = (props: Props) => {
    const currencyStaticArr = productsArray.map((product) => product.currency)
    const currencyStatic = currencyStaticArr[1]

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
        currency: currencyStatic,
        rate: 1,
    })
    const changeCurrencyUSD = (currency: string) => {
        setCurrencyAll(() => ({
            currency: 'USD',
            rate: 37,
        }))
    }
    const changeCurrencyUAH = (currency: string) => {
        setCurrencyAll(() => ({
            currency: 'UAH',
            rate: 1,
        }))
    }
    const changeCurrencyEUR = (currency: string) => {
        setCurrencyAll(() => ({
            currency: 'EUR',
            rate: 40,
        }))
    }
    const changeCurrencyPLN = (currency: string) => {
        setCurrencyAll(() => ({
            currency: 'PLN',
            rate: 8,
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
