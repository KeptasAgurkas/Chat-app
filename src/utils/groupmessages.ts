import {
    Message,
    GroupedMessages,
    MessageDayGroup,
    MessageGroup,
} from '../features/ChatRoom/types'
import { groupByDay, groupByNextItem } from './group'

export function groupMessages(messages: Message[]): GroupedMessages {
    const group = groupByDay(messages, (c) => c.timestamp)
    console.log({
        group,
    })

    const entries = Object.entries(group)

    const result = entries.flatMap(([day, messages]): MessageDayGroup => {
        const groupByFrom = groupByNextItem(messages, (c) => {
            return c.from
        })

        console.log({
            groupByFrom,
        })

        const makeMessageGroup = groupByFrom.map((messages): MessageGroup => {
            const message = messages[0]
            return {
                from: message.from,
                messages,
            }
        })
        return {
            day,
            groups: makeMessageGroup,
        }
    })
    return {
        messageGroups: result,
    }
}
