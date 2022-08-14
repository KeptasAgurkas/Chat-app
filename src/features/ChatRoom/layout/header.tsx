import { Avatar } from '../components/Avatar'
import { useName } from '../components/UserID'

export function Header() {
    const nick = useName()
    return (
        <div className="chat-header px-2 py-1 flex flex-row flex-none justify-between items-center shadow">
            <div className="flex">
                <div className="w-12 h-12 mr-2 relative flex flex-shrink-0">
                    <Avatar />
                </div>
                <div className="text-sm flex items-center">
                    <p className="font-bold">{nick}</p>
                </div>
            </div>
            <div className="flex"></div>
        </div>
    )
}
