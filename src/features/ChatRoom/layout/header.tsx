import { Avatar } from '../components/Avatar'
import { useName } from '../components/UserID'

export function Header() {
    const name = useName()
    return (
        <div className="chat-header px-6 py-1 flex flex-row flex-none justify-between items-center shadow">
            <div className="flex">
                <div className="w-12 h-12 mr-4 relative flex flex-shrink-0">
                    <Avatar />
                </div>
                <div className="text-sm flex items-center">
                    <p className="font-bold">{name}</p>
                </div>
            </div>
            <div className="flex"></div>
        </div>
    )
}
