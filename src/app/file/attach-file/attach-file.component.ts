import { Component } from '@angular/core'

interface AttachFileState {
    value: Number
    text: string
}

@Component({
    selector: 'app-attach-file',
    templateUrl: './attach-file.component.html',
    styleUrls: ['./attach-file.component.scss']
})

export class AttachFileComponent {
    private readonly states = [
        {
            value: 0,
            text: ''
        },
        {
            value: 25,
            text: 'Importando archivo adjunto...'
        }
    ]

    public state: AttachFileState = this.states[0]
}
