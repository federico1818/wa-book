import { Message } from "src/app/chat/messages/message"
import { MessageFactory } from "src/app/chat/messages/message-factory"

export class MediaMessageFactory extends MessageFactory {
    public createMessage(array: RegExpMatchArray): Message {
        return {
            date: this.createDate(array),
            user: this.getUser(array),
            type: 'media'
        }
    }
}
