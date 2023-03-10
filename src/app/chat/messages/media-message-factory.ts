import { MediaMessage } from "src/app/chat/messages/media-message"
import { MessageFactory } from "src/app/chat/messages/message-factory"
import { TxtPattern } from 'src/app/chat/parser/txt-pattern'

export class MediaMessageFactory extends MessageFactory {
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
        TxtPattern.mediaOmitted

    public createMessage(array: RegExpMatchArray): MediaMessage {
        return {
            date: this.createDate(array),
            user: this.getUser(array),
            media: array[13]
        }
    }
}
