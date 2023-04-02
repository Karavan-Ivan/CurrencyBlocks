import './TotalPrice.scss'

type Props = {
    totalPriceProducts: {
        totalPrice: number
    }
}

const TotalPrice = ({ totalPriceProducts }: Props) => {
    return (
        <div className="totalPrice">
            Total price: {totalPriceProducts.totalPrice}
        </div>
    )
}

export default TotalPrice
