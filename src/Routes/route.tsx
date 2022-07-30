import {
    Router,
    ReactLocation,
    Navigate,
    Outlet,
} from '@tanstack/react-location'
import { PropsWithChildren } from 'react'
import { ChatBox } from '../components/chatbox'
import ChatName from './chatname'
import { absolutPath, ROUTES } from './const'
import RoomName from './roomname'

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
                            <Outlet></Outlet>
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
