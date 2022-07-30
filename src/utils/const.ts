export const ROUTES = {
    chatName: {
        root: () => {
            return [`/chat-name`]
        },
    },
    room: {
        name: () => {
            return [`/room-name`]
        },
        room: (id?: string) => {
            return ['/room', id ? id : ':id']
        },
    },
}

export function absolutPath(paths: string[]) {
    return paths.join('/')
}
