import { Component } from '@angular/core'
import { TxtParserService } from 'src/app/chat/parser/txt-parser.service'

@Component({
    selector: 'app-input-file',
    templateUrl: './input-file.component.html',
    styleUrls: ['./input-file.component.scss']
})

export class InputFileComponent {

    constructor(
        private _txtParserService: TxtParserService
    ) {}

    /* processed */
    public onRead(content: string): void {
        const chat = this._txtParserService.parse(content)
        console.log(chat)
    }

}
