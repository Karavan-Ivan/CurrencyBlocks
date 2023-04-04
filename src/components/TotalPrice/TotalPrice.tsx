import './TotalPrice.scss'

type Props = {
    totalPriceProducts: {
        totalPrice: number
    }
    currencyAll: {
        currency: string
        rate: number
    }
}

const TotalPrice = ({ totalPriceProducts, currencyAll }: Props) => {
    return (
        <div className="totalPrice">
            Total price:{' '}
            {Math.round(totalPriceProducts.totalPrice / currencyAll.rate)}{' '}
            {currencyAll.currency}
        </div>
    )
}

export default TotalPrice
