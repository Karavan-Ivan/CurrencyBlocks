import Currency from 'components/Currency/Currency'
import Products from 'components/Products/Products'
import TotalPrice from 'components/TotalPrice/TotalPrice'
import productsArray from 'utils/productsArray'

type Props = {
    totalPriceProducts: {
        totalPrice: number
    }
    buyProduct: (price: number) => void
}

const Main = ({ totalPriceProducts, buyProduct }: Props) => {
    const changeCurrencyUSD = () => {
        price: productsArray.map((product) => product.price * 38)
    }
    return (
        <>
            <Currency changeCurrencyUSD={changeCurrencyUSD} />
            <Products buyProduct={buyProduct} />
            <TotalPrice totalPriceProducts={totalPriceProducts} />
        </>
    )
}

export default Main
