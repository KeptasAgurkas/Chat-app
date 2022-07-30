import { GroupedMessages } from '../types'
import { ReceiverMessageGroup } from './receiver'
import { SenderMessageGroupRow } from './sender'

export function ChatBody(props: GroupedMessages) {
    const userId = 'current_user_id'

    return (
        <div className="chat-body p-4 flex-1 overflow-y-scroll">
            {props.messageGroups.map((messageGroup) => {
                return (
                    <>
                        {messageGroup.groups.map((m) => {
                            if (m.from === userId) {
                                return (
                                    <ReceiverMessageGroup
                                        {...m}
                                    ></ReceiverMessageGroup>
                                )
                            }
                            return (
                                <SenderMessageGroupRow
                                    {...m}
                                ></SenderMessageGroupRow>
                            )
                        })}

                        <p className="p-4 text-center text-sm text-gray-500">
                            {messageGroup.day}
                        </p>
                    </>
                )
            })}
        </div>
    )
}
