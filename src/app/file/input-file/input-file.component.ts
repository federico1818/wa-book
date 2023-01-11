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
        private txtParserService: TxtParserService
    ) {}

    /* processed */
    public onRead(content: string): void {
        const groups = this.txtParserService.parse(content)
        console.log(groups)
    }

}
