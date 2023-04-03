import Currency from 'components/Currency/Currency'
import Products from 'components/Products/Products'
import TotalPrice from 'components/TotalPrice/TotalPrice'
import productsArray from 'utils/productsArray'

type Props = {
    totalPriceProducts: {
        totalPrice: number
    }
    buyProduct: (price: number) => void
    changeCurrencyUSD: (currency: string) => void
    changeCurrencyUAH: (currency: string) => void
    changeCurrencyEUR: (currency: string) => void
    changeCurrencyPLN: (currency: string) => void
    currencyAll: any
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
            <TotalPrice totalPriceProducts={totalPriceProducts} />
        </>
    )
}

export default Main
