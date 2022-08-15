import { useMessageContext } from '../context/MessagesContext'
import { useName } from './UserID'

export function Avatar() {
    const userId = useName()

    return (
        <img
            src={`https://robohash.org/${userId}`}
            alt="Icon"
            width="128"
            height="128"
        />
    )
}
