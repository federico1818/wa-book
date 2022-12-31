import { Message } from "./message"

export class TextMessage implements Message {
    public user: any
    public date!: Date
    public lines: string[] = []
}
