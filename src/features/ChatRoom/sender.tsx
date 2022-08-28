import classnames from 'classnames'
import { Avatar } from './components/Avatar'
import { useMessageContext } from './context/MessagesContext'
import { MessageGroup, Message } from './types'

export function SenderMessageGroupRow(props: MessageGroup) {
    const messageContext = useMessageContext()
    return (
        <div className="flex flex-row justify-start">
            <div className="w-8 h-8 relative flex flex-shrink-0 mr-4">
                <div className="flex flex-col justify-center items-center mt-10">
                    <Avatar userName={props.from} />
                    <span className="text-xs">{props.from}</span>
                </div>
            </div>
            <div className="messages text-sm text-gray-700 grid grid-flow-row gap-2">
                {props.messages.map((message, index, arr) => {
                    const isFirst = index === 0
                    const isLast = arr.length - 1 === index
                    return (
                        <div className="flex items-center group">
                            <p
                                className={classnames(
                                    'text-left ',
                                    {
                                        [' rounded-t-full rounded-r-full']:
                                            !isLast && isFirst,
                                        [' rounded-full']: isLast && isFirst,
                                        ['  rounded-r-full']:
                                            !isLast && !isFirst,
                                        [' rounded-b-full rounded-r-full']:
                                            !isFirst && isLast,
                                        ['mt-5']: isFirst,
                                    },

                                    ' px-6 py-3 bg-gray-800 max-w-xs lg:max-w-md text-gray-200'
                                )}
                            >
                                {message.content}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
