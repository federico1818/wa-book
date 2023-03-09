import { MessageFactory } from "src/app/chat/messages/message-factory"
import { TextMessage } from "src/app/chat/messages/text-message"
import { TxtPattern } from 'src/app/chat/parser/txt-pattern'

export class TextMessageFactory extends MessageFactory {
    public readonly PATTERN: string =
        TxtPattern.day +
        TxtPattern.dateSeparator +
        TxtPattern.month +
        TxtPattern.dateSeparator +
        TxtPattern.year +
        TxtPattern.dateHourSeparator +
        TxtPattern.hour +
        TxtPattern.hourSeparator +
        TxtPattern.minutes +
        TxtPattern.hourUserSeparator +
        TxtPattern.user +
        TxtPattern.userSeparator +
        TxtPattern.messsage

    public createMessage(array: RegExpMatchArray): TextMessage {
        return {
            date: this.createDate(array),
            user: this.getUser(array),
            lines: [array[13]]
        }
    }
}
