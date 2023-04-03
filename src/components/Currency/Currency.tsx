import { Button } from '@mui/material'
fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    })

type Props = {}

const Currency = (props: Props) => {
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
            >
                PLN
            </Button>
        </div>
    )
}

export default Currency
