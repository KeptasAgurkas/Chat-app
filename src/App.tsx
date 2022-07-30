import { useEffect, useState } from 'react'
import './assets/App.css'
import { ChatBox } from './Pages/chatbox'
import { GunProvider, useGun } from './features/Gun/gun-store'
import { Message } from './features/ChatRoom/types'
import * as P from 'ts-prime'
import { Routing } from './route'
import { MessageProvider } from './features/ChatRoom/context/MessagesContext'
function useMessages() {
    const db = useGun()
    const [fromMessages, setFrom] = useState<Record<string, Message>>({})
    useEffect(() => {
        db.get('messages')
            .get('chatID')
            .get('date')
            .get('hour')
            .map((c) => c)
            .on((messages) => {
                setFrom((state) => {
                    return {
                        ...state,
                        [messages._['#']]: messages,
                    }
                })
            })
    }, [])
    return {
        message: fromMessages,
        async sendMessage(message: Message) {
            await db
                .get('messages')
                .get('1234')
                .get('2022-01-01')
                .get('22:00')
                .get(Date.now().toString())
                .put(message)
        },
    }
}

function App() {
    return (
        <GunProvider>
            <MessageProvider>
                <Routing></Routing>
            </MessageProvider>
        </GunProvider>
    )
}

export default App
