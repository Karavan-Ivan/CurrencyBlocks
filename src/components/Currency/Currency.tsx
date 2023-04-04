import { Button } from '@mui/material'
fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    })

type Props = {
    changeCurrencyUSD: (currency: string, rate: number) => void
    changeCurrencyUAH: (currency: string, rate: number) => void
    changeCurrencyEUR: (currency: string, rate: number) => void
    changeCurrencyPLN: (currency: string, rate: number) => void
    currencyAll: {
        currency: string
        rate: number
    }
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
                onClick={() =>
                    changeCurrencyEUR(currencyAll.currency, currencyAll.rate)
                }
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
                onClick={() =>
                    changeCurrencyUAH(currencyAll.currency, currencyAll.rate)
                }
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
                onClick={() =>
                    changeCurrencyUSD(currencyAll.currency, currencyAll.rate)
                }
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
                onClick={() =>
                    changeCurrencyPLN(currencyAll.currency, currencyAll.rate)
                }
            >
                PLN
            </Button>
        </div>
    )
}

export default Currency
