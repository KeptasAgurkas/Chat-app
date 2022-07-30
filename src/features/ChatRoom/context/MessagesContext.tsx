import {
    createContext,
    PropsWithChildren,
    useContext,
    useEffect,
    useState,
} from 'react'
import * as P from 'ts-prime'
import * as DF from 'date-fns'
import { useGun } from '../../Gun'
import { Message } from '../types'
import { useMatch } from '@tanstack/react-location'

function useMessages() {
    const mat = useMatch()
    const roomId = '333'
    const db = useGun()
    const [fromMessages, setFrom] = useState<Record<string, Message>>({})
    const dates = getDates(new Date())

    useEffect(() => {
        dates.map(({ day, hour }) => {
            return db
                .get('messages')
                .get(roomId)
                .get(day)
                .get(hour)
                .map((c) => c)
                .on((messages) => {
                    setFrom((state) => {
                        return {
                            ...state,
                            [messages._['#']]: messages,
                        }
                    })
                })
        })
    }, [])

    return {
        message: fromMessages,
        async sendMessage(message: Message) {
            await db
                .get('messages')
                .get(roomId)
                .get(DF.format(new Date(message.timestamp), 'yyyy-MM-dd'))
                .get(DF.format(DF.startOfHour(new Date()), 'HH:mm'))
                .get(P.uuidv4())
                .put(message)
        },
    }
}

const messageContext = createContext<ReturnType<typeof useMessages> | null>(
    null
)

export function useMessageContext() {
    const messages = useContext(messageContext)
    if (messages == null) throw new Error('Provide message context')
    return messages
}
export function MessageProvider(props: PropsWithChildren) {
    const value = useMessages()
    return (
        <messageContext.Provider value={value}>
            {props.children}
        </messageContext.Provider>
    )
}

export function useMessageList() {
    const msgContext = useMessageContext()
    return Object.values(msgContext.message)
}

interface DateValue {
    day: string
    hour: string
}

function getDates(currentDate: Date): DateValue[] {
    let pastDate = DF.sub(currentDate, { days: 1 })

    let dates: DateValue[] = []

    while (true) {
        if (DF.isAfter(pastDate, currentDate)) return dates
        const date: DateValue = {
            day: DF.format(pastDate, 'yyyy-MM-dd'),
            hour: DF.format(DF.startOfHour(pastDate), 'HH:mm'),
        }
        dates.push(date)
        pastDate = DF.add(pastDate, { hours: 1 })
    }
}
