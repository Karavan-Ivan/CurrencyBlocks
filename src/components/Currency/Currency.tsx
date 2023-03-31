import { Button } from '@mui/material'

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
