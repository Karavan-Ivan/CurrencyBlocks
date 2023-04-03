import { Button } from '@mui/material'
fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    })

type Props = {
    changeCurrencyUSD: (currency: string) => void
    changeCurrencyUAH: (currency: string) => void
    changeCurrencyEUR: (currency: string) => void
    changeCurrencyPLN: (currency: string) => void
    currencyAll: any
}

const Currency = ({
    changeCurrencyUSD,
    changeCurrencyUAH,
    changeCurrencyEUR,
    changeCurrencyPLN,
    currencyAll,
}: Props) => {
    return (
        <div>
            <Button
                variant="outlined"
                size="small"
                sx={{
                    backgroundColor: 'grey',
                    color: 'black',
                    borderColor: 'black',
                }}
                onClick={() => changeCurrencyEUR(currencyAll.currency)}
            >
                EUR
            </Button>
            <Button
                variant="outlined"
                size="small"
                sx={{
                    backgroundColor: 'grey',
                    color: 'black',
                    borderColor: 'black',
                }}
                onClick={() => changeCurrencyUAH(currencyAll.currency)}
            >
                UAH
            </Button>
            <Button
                variant="outlined"
                size="small"
                sx={{
                    backgroundColor: 'grey',
                    color: 'black',
                    borderColor: 'black',
                }}
                onClick={() => changeCurrencyUSD(currencyAll.currency)}
            >
                USD
            </Button>
            <Button
                variant="outlined"
                size="small"
                sx={{
                    backgroundColor: 'grey',
                    color: 'black',
                    borderColor: 'black',
                }}
                onClick={() => changeCurrencyPLN(currencyAll.currency)}
            >
                PLN
            </Button>
        </div>
    )
}

export default Currency
