import { Message } from "./message"

export interface TextMessage extends Message {
    date: Date
    user: any
    message: string
}
