import { useEffect, useState } from 'react'
import './App.css'
import { ChatBox } from './components/chatbox'
import { GunProvider, useGun } from './hooks/gun-store'
import { Message } from './types'
import * as P from 'ts-prime'
import { Routing } from './Routes/route'
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

const userId = localStorage.getItem('user')

function Content() {
    const messages = useMessages()

    return (
        <>
            {/*<Routing></Routing>
            {P.sortBy(
                Object.entries(messages.message),
                ([_, v]) => v.timestamp
            ).map(([id, value]) => {
                return (
                    <div>
                        <div>{value.from}</div>
                        <div>{value.content}</div>
                    </div>
                )
            })}
            <button
                onClick={() => {
                    messages.sendMessage({
                        content: Date.now().toString(36),
                        from: userId || '',
                        to: 'andrius',
                        timestamp: Date.now(),
                    })
                }}
            >
                button
            </button>*/}
        </>
    )
}

function App() {
    return (
        <GunProvider>
            <Content></Content>
        </GunProvider>
    )
}

export default App
