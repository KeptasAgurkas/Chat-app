import {
    Message,
    GroupedMessages,
    MessageDayGroup,
    MessageGroup,
} from '../features/ChatRoom/types'
import * as P from 'ts-prime'
import { groupByDay, groupByNextItem } from './group'

export function groupMessages(messages: Message[]): GroupedMessages {
    const group = groupByDay(messages, (c) => c.timestamp)

    const entries = Object.entries(group)

    const result = entries.flatMap(([day, messages]): MessageDayGroup => {
        const groupByFrom = groupByNextItem(
            P.sortBy(messages, (c) => c.timestamp),
            (c) => {
                return c.from
            }
        )

        const makeMessageGroup = groupByFrom.map((messages): MessageGroup => {
            const message = messages[0]
            return {
                from: message.from,
                messages: messages,
            }
        })
        return {
            day,
            groups: makeMessageGroup,
        }
    })
    return {
        messageGroups: P.sortBy(result, (c) => new Date(c.day).getTime()),
    }
}
