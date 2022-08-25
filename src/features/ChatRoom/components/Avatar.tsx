import { useName } from './UserID'

export function Avatar(props: { userName: string }) {
    return (
        <img
            src={`https://robohash.org/${props.userName || '123'}`}
            alt="Icon"
            width="128"
            height="128"
        />
    )
}
