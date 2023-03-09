import { InfoMessage } from "src/app/chat/messages/info-message"
import { MessageFactory } from "src/app/chat/messages/message-factory"
import { TxtPattern } from 'src/app/chat/parser/txt-pattern'

export class InfoMessageFactory extends MessageFactory {
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
        TxtPattern.hourMessageSeparator +
        TxtPattern.info

    public createMessage(array: RegExpMatchArray): InfoMessage {
        return {
            date: this.createDate(array),
            message: array[11]
        }
    }
}

