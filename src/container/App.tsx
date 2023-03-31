import { Container } from '@mui/material'
import Header from './Header/Header'
import Main from './Main/Main'

type Props = {}

const App = (props: Props) => {
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
            <Main />
        </Container>
    )
}

export default App
