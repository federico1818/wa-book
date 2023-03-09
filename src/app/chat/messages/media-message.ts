import { Message } from "src/app/chat/messages/message"
import { User } from "src/app/chat/user"

export class MediaMessage extends Message {
    readonly type?: string = 'media'
    public user!: User
    public media!: string
}
