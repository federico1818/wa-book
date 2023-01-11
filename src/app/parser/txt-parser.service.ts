import { Injectable } from '@angular/core'
import { TxtPattern } from 'src/app/parser/txt-pattern'
import { TextMessage } from 'src/app/chat/messages/text-message'
import { Chat } from 'src/app/chat/chat'
import { User } from 'src/app/chat/user'

@Injectable({
    providedIn: 'root'
})

export class TxtParserService {
    private _chat: Chat = new Chat

    constructor() {}

    public parse(content: string): Chat {
        const lines = content.split(/\r?\n/)
        return this.processLines(lines)
    }

    private processLines(lines: String[]): Chat {

        lines.forEach((line: String) => {
            const matchMsgFull = this.matchMsgFull(line)

            if(matchMsgFull) {
                const text: TextMessage = this.createTextMessage(matchMsgFull)
                this._chat.messages.push(text)
            }
            else {
                console.log('INFO - ', line)
            }

        })

        return this._chat
    }

    private matchMsgFull(line: String): RegExpMatchArray | null {
        return line.match(RegExp(TxtPattern.MSG_FULL))
    }

    private createTextMessage(array: RegExpMatchArray): TextMessage {
        return {
            date: this.createDate(array),
            message: this.createText(array),
            user: this.getUser(array)
        }
    }

    private createDate(array: RegExpMatchArray): Date {
        const year: number = 2000 + parseInt(array[5], 10)
        const month: number = parseInt(array[1], 10)
        const day: number = parseInt(array[3], 10)
        const hour: number = parseInt(array[7], 10)
        const minutes: number = parseInt(array[9], 10)
        const seconds: number = 0

        return new Date(year, month, day, hour, minutes, seconds)
    }

    private getUser(array: RegExpMatchArray): User {
        return this._chat.getFirstUserOrCreate(array[11])
    }

    private createText(array: RegExpMatchArray): string {
        return array[13]
    }
}
