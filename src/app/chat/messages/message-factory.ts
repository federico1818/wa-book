import { User } from "src/app/chat/user"
import { Chat } from "src/app/chat/chat"
import { Message } from "src/app/chat/messages/message"

export abstract class MessageFactory {

    constructor(
        private _chat: Chat
    ) {}

    public abstract createMessage(array: RegExpMatchArray): Message

    protected createDate(array: RegExpMatchArray): Date {
        const year: number = 2000 + parseInt(array[5], 10)
        const month: number = parseInt(array[1], 10)
        const day: number = parseInt(array[3], 10)
        const hour: number = parseInt(array[7], 10)
        const minutes: number = parseInt(array[9], 10)
        const seconds: number = 0

        return new Date(year, month, day, hour, minutes, seconds)
    }

    protected getUser(array: RegExpMatchArray): User {
        return this._chat.getFirstUserOrCreate(array[11])
    }
}
