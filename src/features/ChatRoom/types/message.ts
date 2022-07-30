export interface Message {
    id: string
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
    messages: Message[]
}

export interface MessageDayGroup {
    day: string
    groups: MessageGroup[]
}

export interface GroupedMessages {
    messageGroups: MessageDayGroup[]
}
