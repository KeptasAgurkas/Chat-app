import { groupMessages } from '../utils/groupmessages'
import { ChatBody } from './chatbody'
import { Footer } from './footer'
import { Header } from './header'
import * as DF from 'date-fns'
import { useGun } from '../hooks/gun-store'

export function ChatBox(props: {}) {
    const db = useGun()
    const mockData = [
        {
            content: 'asdasd',
            from: 'current_user_id',
            to: 'Andrius',
            timestamp: DF.sub(new Date(), {
                days: 1,
            }),
        },
        {
            content: 'asdasd',
            from: 'current_user_id',
            to: 'Andrius',
            timestamp: DF.sub(new Date(), {
                days: 1,
            }),
        },
        {
            content: 'asdasd',
            from: 'Lukas',
            to: 'Andrius',
            timestamp: DF.sub(new Date(), {
                days: 1,
            }),
        },
        {
            content: 'asdasd',
            from: 'current_user_id',
            to: 'Andrius',
            timestamp: DF.sub(new Date(), {
                days: 1,
            }),
        },
        {
            content: 'asdasd',
            from: 'current_user_id',
            to: 'Andrius',
            timestamp: DF.sub(new Date(), {
                days: 1,
            }),
        },
        {
            content: 'ASDASDASDASDASDASD',
            from: 'current_user_id',
            to: 'Andrius',
            timestamp: DF.sub(new Date(), {
                days: 1,
            }),
        },
        {
            content: 'asdasd',
            from: 'Lukas',
            to: 'Andrius',
            timestamp: DF.sub(new Date(), {
                days: 2,
            }),
        },
        {
            content: 'asdasd',
            from: 'Lukas',
            to: 'Andrius',
            timestamp: DF.sub(new Date(), {
                days: 2,
            }),
        },
        {
            content: 'asdasd',
            from: 'Lukas',
            to: 'Andrius',
            timestamp: DF.sub(new Date(), {
                days: 2,
            }),
        },
        {
            content: 'asdasd',
            from: 'Lukas',
            to: 'Andrius',
            timestamp: DF.sub(new Date(), {
                days: 2,
            }),
        },
        {
            content: 'asdasd',
            from: 'Lukas',
            to: 'Andrius',
            timestamp: DF.sub(new Date(), {
                days: 2,
            }),
        },
        {
            content: 'asdasd',
            from: 'Lukas',
            to: 'Andrius',
            timestamp: DF.sub(new Date(), {
                days: 2,
            }),
        },
        {
            content: 'asdasd',
            from: 'Lukas',
            to: 'Andrius',
            timestamp: DF.sub(new Date(), {
                days: 3,
            }),
        },
        {
            content: 'geras',
            from: 'Lukas',
            to: 'Andrius',
            timestamp: DF.sub(new Date(), {
                days: 1,
            }),
        },
        {
            content: 'asd',
            from: 'Andrius',
            to: 'Lukas',
            timestamp: DF.sub(new Date(), {
                days: 2,
            }),
        },
        {
            content: 'asd',
            from: 'Andrius',
            to: 'Lukas',
            timestamp: DF.sub(new Date(), {
                days: 3,
            }),
        },
        {
            content: 'asd',
            from: 'Andrius',
            to: 'Lukas',
            timestamp: DF.sub(new Date(), {
                days: 1,
            }),
        },
        {
            content: 'asd',
            from: 'Andrius',
            to: 'Lukas',
            timestamp: DF.sub(new Date(), {
                days: 2,
            }),
        },
        {
            content: 'asd',
            from: 'Andrius',
            to: 'Lukas',
            timestamp: DF.sub(new Date(), {
                days: 3,
            }),
        },
    ].map((c) => ({ ...c, timestamp: c.timestamp.getTime() }))
    return (
        <>
            <div className="h-screen w-full flex antialiased text-gray-200 bg-gray-900 overflow-hidden">
                <div className="flex-1 flex flex-col">
                    <main className="flex-grow flex flex-row min-h-0">
                        <section className="flex flex-col flex-auto border-l border-gray-800">
                            <Header></Header>
                            <ChatBody {...groupMessages(mockData)}></ChatBody>
                            <Footer></Footer>
                            <div className="chat-footer flex-none"></div>
                        </section>
                    </main>
                </div>
            </div>
        </>
    )
}
