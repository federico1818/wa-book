import { Component, EventEmitter, Output } from '@angular/core'
import { Message } from 'src/app/message/message'
import { TxtParserService } from 'src/app/parser/txt-parser.service'
import { TxtPattern } from 'src/app/parser/txt-pattern'

@Component({
    selector: 'app-input-file',
    templateUrl: './input-file.component.html',
    styleUrls: ['./input-file.component.scss']
})

export class InputFileComponent {
    @Output() public read: EventEmitter<Message[]> = new EventEmitter<Message[]>

    private readonly MSG_INFO = 'Messages and calls are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them. Tap to learn more'

    constructor(
        private TxtParserService: TxtParserService
    ) {}

    /* processed */
    public onRead(content: string): void {
        const lines = content.split(/\r?\n/)
        const messages = this.processLines(lines)
    }

    private processLines(lines: String[]): Message[] {
        const messages: Message[] = []

        lines.forEach((line: String) => {
            let messageTypeFlag: Boolean = false

            const matchArrayDate = this.matchMsgFull(line)

            if(!matchArrayDate) {
                console.log('INFO - ', line)
            }
            else {
                console.log(matchArrayDate)
            }

        })

        return []
    }

    private matchMsgFull(line: String): RegExpMatchArray | null {
        return line.match(RegExp(TxtPattern.MSG_FULL))
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

    private createText(array: RegExpMatchArray): string {
        return array[13]
    }

}
