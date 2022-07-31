import { GroupedMessages } from '../types'
import { ReceiverMessageGroup } from '../receiver'
import { SenderMessageGroupRow } from '../sender'
import { useRef } from 'react'
import { useName } from '../components/UserID'

export function ChatBody(props: GroupedMessages) {
    const userId = useName()
    const ref = useRef<HTMLDivElement>(null)

    ref.current?.scrollTo({
        top: ref.current.scrollHeight,
        behavior: 'smooth',
    })
    return (
        <div className="chat-body p-4 flex-1 overflow-y-scroll" ref={ref}>
            {props.messageGroups.map((messageGroup) => {
                return (
                    <>
                        <p className="p-4 text-center text-sm text-gray-500">
                            {messageGroup.day}
                        </p>
                        {messageGroup.groups.map((m, index) => {
                            if (m.from === userId) {
                                return (
                                    <ReceiverMessageGroup
                                        key={index}
                                        {...m}
                                    ></ReceiverMessageGroup>
                                )
                            }
                            return (
                                <SenderMessageGroupRow
                                    key={index}
                                    {...m}
                                ></SenderMessageGroupRow>
                            )
                        })}
                    </>
                )
            })}
        </div>
    )
}
