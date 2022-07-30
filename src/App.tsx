import { useEffect, useState } from 'react'
import './assets/App.css'
import { ChatBox } from './Pages/chatbox'
import { Message } from './features/ChatRoom/types'
import * as P from 'ts-prime'
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
