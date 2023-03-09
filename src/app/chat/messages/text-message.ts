import { Message } from "src/app/chat/messages/message"
import { User } from "src/app/chat/user"

export class TextMessage extends Message {
    readonly type?: string = 'text'
    public user!: User
    public lines: string[] = []
}
