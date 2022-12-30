import { Component, EventEmitter, Output } from '@angular/core'
import { Message } from 'src/app/message/message'

@Component({
    selector: 'app-input-file',
    templateUrl: './input-file.component.html',
    styleUrls: ['./input-file.component.scss']
})

export class InputFileComponent {
    @Output() public read: EventEmitter<Message[]> = new EventEmitter<Message[]>

    constructor(){}

    /* processed */
    public onRead(content: string): void {
        const lines = content.split(/\r?\n/)
        const messages = lines.map(this.processLine.bind(this))
        console.log(messages)
    }

    /*
        const line = '12/9/21, 20:46 - Federico Aboy Solanes: A ver qué opinan.. ahora que se fue el pibe este mi jefe quiere poner a la rusa en su puesto'
        const day = '([0-9]?[0-9])'
        const month = '([0-9]?[0-9])'
        const year = '([0-9]{2})'
        const dateSeparator = '(\/)'
        const dateHourSeparator = '(, )'
        const hour = '([0-9]{2})'
        const hourSeparator = '(\:)'
        const minutes = '([0-9]{2})'
        const hourUserSeparator = '( - )'
        // const user = '([a-zA-Z ]+)'
        const user = '([^\:]+)'
        const userSeparator = '(\:)'
        const messsage = '([^]*)'
        const regexp = RegExp(`${ day }${ dateSeparator }${ month }${ dateSeparator }${ year }${ dateHourSeparator }${ hour }${ hourSeparator }${ minutes }${ hourUserSeparator }${ user }${ userSeparator }${ messsage }`)
        const regExpMatchArray = line.match(regexp)
    */
    private processLine(line: string): Message | {} {
        const regExpMatchArray = this.matchLine(line)
        if(!regExpMatchArray) return {}

        return {
            date: this.createDate(regExpMatchArray),
            text: this.createText(regExpMatchArray)
        }
    }

    private matchDatetime(line: string) {
        const day: string = '([0-9]?[0-9])'
        const month: string = '([0-9]?[0-9])'
        const year: string = '([0-9]{2})'
        const dateSeparator: string = '(\/)'

    }

    private matchLine(line: string): RegExpMatchArray | null {
        const day: string = '([0-9]?[0-9])'
        const month: string = '([0-9]?[0-9])'
        const year: string = '([0-9]{2})'
        const dateSeparator: string = '(\/)'
        const dateHourSeparator: string = '(, )'
        const hour: string = '([0-9]{2})'
        const hourSeparator: string = '(\:)'
        const minutes: string = '([0-9]{2})'
        const hourUserSeparator: string = '( - )'
        const user: string = '([^\:]+)'
        const userSeparator: string = '(\:)'
        const messsage: string = '([^]*)'

        const regexp = RegExp(`${ day }${ dateSeparator }${ month }${ dateSeparator }${ year }${ dateHourSeparator }${ hour }${ hourSeparator }${ minutes }${ hourUserSeparator }${ user }${ userSeparator }${ messsage }`)

        return line.match(regexp)
    }

    private createDate(array: RegExpMatchArray): Date {
        return new Date
    }

    private createText(array: RegExpMatchArray): string {
        return array[13]
    }
}
