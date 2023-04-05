import Currency from 'components/Currency/Currency'
import Products from 'components/Products/Products'
import TotalPrice from 'components/TotalPrice/TotalPrice'

type Props = {
    totalPriceProducts: {
        totalPrice: number
    }
    buyProduct: (price: number) => void
    changeCurrencyUSD: (currency: string, rate: number) => void
    changeCurrencyUAH: (currency: string, rate: number) => void
    changeCurrencyEUR: (currency: string, rate: number) => void
    changeCurrencyPLN: (currency: string, rate: number) => void
    currencyAll: {
        currency: string
        rate: number
    }
}

const Main = ({
    totalPriceProducts,
    buyProduct,
    changeCurrencyUSD,
    changeCurrencyUAH,
    changeCurrencyEUR,
    changeCurrencyPLN,
    currencyAll,
}: Props) => {
    return (
        <>
            <Currency
                changeCurrencyUSD={changeCurrencyUSD}
                changeCurrencyUAH={changeCurrencyUAH}
                changeCurrencyEUR={changeCurrencyEUR}
                changeCurrencyPLN={changeCurrencyPLN}
                currencyAll={currencyAll}
            />
            <Products
                buyProduct={buyProduct}
                changeCurrencyUSD={changeCurrencyUSD}
                currencyAll={currencyAll}
            />
            <TotalPrice
                totalPriceProducts={totalPriceProducts}
                currencyAll={currencyAll}
            />
        </>
    )
}

export default Main
