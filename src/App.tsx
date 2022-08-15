import { Routing } from './route'
import { GunProvider } from './features/Gun/gun-store'

function App() {
    return (
        <GunProvider>
            <Routing></Routing>
        </GunProvider>
    )
}

export default App
