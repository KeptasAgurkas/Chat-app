import { groupMessages } from '../utils/groupmessages'
import { ChatBody } from '../features/ChatRoom/layout/chatbody'
import { Footer } from '../features/ChatRoom/layout/footer'
import { Header } from '../features/ChatRoom/layout/header'
import { useMessageList } from '../features/ChatRoom/context/MessagesContext'

export function ChatBox(props: {}) {
    const messages = useMessageList()
    console.log(groupMessages(messages))
    return (
        <>
            <div className="h-screen w-full flex antialiased text-gray-200 bg-gray-900 overflow-hidden">
                <div className="flex-1 flex flex-col">
                    <main className="flex-grow flex flex-row min-h-0">
                        <section className="flex flex-col flex-auto border-l border-gray-800">
                            <Header></Header>
                            {messages.length}
                            <ChatBody {...groupMessages(messages)}></ChatBody>
                            <Footer></Footer>
                            <div className="chat-footer flex-none"></div>
                        </section>
                    </main>
                </div>
            </div>
        </>
    )
}
