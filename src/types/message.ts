export interface Message {
    content: string
    from: string
    to: string
    timestamp: number
}

export interface BaseMessage {
    content: string
}
export interface MessageGroup {
    from: string
    messages: BaseMessage[]
}

export interface MessageDayGroup {
    day: string
    groups: MessageGroup[]
}

export interface GroupedMessages {
    messageGroups: MessageDayGroup[]
}
