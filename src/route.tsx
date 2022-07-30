import {
    Router,
    ReactLocation,
    Navigate,
    Outlet,
} from '@tanstack/react-location'
import { PropsWithChildren } from 'react'
import { ChatBox } from './Pages/chatbox'
import ChatName from './Pages/chatname'
import { absolutPath, ROUTES } from './utils/const'
import RoomName from './Pages/roomname'
import { MessageProvider } from './features/ChatRoom/context/MessagesContext'

const location = new ReactLocation()

function UserGuard(props: PropsWithChildren<{}>) {
    const user = localStorage.getItem('user')
    if (user == null)
        return <Navigate to={absolutPath(ROUTES.chatName.root())}></Navigate>

    return <>{props.children}</>
}

export function Routing() {
    return (
        <Router
            location={location}
            routes={[
                {
                    path: '/chat-name',
                    element: <ChatName />,
                },
                {
                    path: '/room-name',
                    element: (
                        <UserGuard>
                            <Outlet></Outlet>
                        </UserGuard>
                    ),
                    children: [
                        {
                            path: '/',
                            element: <RoomName />,
                        },
                    ],
                },
                {
                    path: '/room/:id',
                    element: (
                        <UserGuard>
                            <MessageProvider>
                                <Outlet></Outlet>
                            </MessageProvider>
                        </UserGuard>
                    ),
                    children: [
                        {
                            path: '/chat',
                            element: <ChatBox></ChatBox>,
                        },
                        {
                            element: <Navigate to={'chat'}></Navigate>,
                        },
                    ],
                },
                {
                    element: (
                        <Navigate
                            to={absolutPath(ROUTES.room.name())}
                        ></Navigate>
                    ),
                },
            ]}
        ></Router>
    )
}
