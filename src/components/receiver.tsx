import classnames from 'classnames'
import { MessageGroup } from '../types'

export function ReceiverMessageGroup(props: MessageGroup) {
    return (
        <div className="flex flex-row justify-end">
            <div className="messages text-sm text-white grid grid-flow-row gap-2">
                {props.messages.map((message, index, arr) => {
                    const isFirst = index === 0
                    const isLast = arr.length - 1 === index
                    return (
                        <div className="flex items-center flex-row-reverse group">
                            <p
                                className={classnames(
                                    'text-right',
                                    {
                                        ['rounded-t-full rounded-l-full']:
                                            !isLast && isFirst,
                                        ['rounded-full']: isLast && isFirst,
                                        ['rounded-l-full']: !isLast && !isFirst,
                                        ['rounded-b-full rounded-l-full']:
                                            !isFirst && isLast,
                                    },

                                    'px-6 py-3 bg-blue-700 max-w-xs lg:max-w-md text-gray-200'
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
