import { Component, EventEmitter, Output } from '@angular/core'
import { Message } from 'src/app/message/message'

@Component({
    selector: 'app-input-file',
    templateUrl: './input-file.component.html',
    styleUrls: ['./input-file.component.scss']
})

export class InputFileComponent {
    @Output() public read: EventEmitter<Message[]> = new EventEmitter<Message[]>

    private readonly MSG_PATTERN = {
        day: '([0-9]?[0-9])',
        month: '([0-9]?[0-9])',
        year: '([0-9]{2})',
        dateSeparator: '(\/)',
        dateHourSeparator: '(, )',
        hour: '([0-9]{2})',
        hourSeparator: '(\:)',
        minutes: '([0-9]{2})',
        hourUserSeparator: '( - )'
    } as const

    private readonly MSG_PATTERN_DATETIME =
        this.MSG_PATTERN.day +
        this.MSG_PATTERN.dateSeparator +
        this.MSG_PATTERN.month +
        this.MSG_PATTERN.dateSeparator +
        this.MSG_PATTERN.year +
        this.MSG_PATTERN.dateHourSeparator +
        this.MSG_PATTERN.hour +
        this.MSG_PATTERN.hourSeparator +
        this.MSG_PATTERN.minutes +
        this.MSG_PATTERN.hourUserSeparator

    /* processed */
    public onRead(content: string): void {
        const lines = content.split(/\r?\n/)
        const messages = this.processLines(lines)
        //console.log(lines)
    }

    private processLines(lines: String[]): Message[] {
        const messages: Message[] = []

        lines.forEach((line: String) => {
            let messageTypeFlag: Boolean = false

            const matchArrayDate = this.matchDatetime(line)

            if(!matchArrayDate)
                console.log('INFO - ', line)
            else
                console.log(this.createDate(matchArrayDate))

        })

        return []
    }

    private matchDatetime(line: String): RegExpMatchArray | null {
        return line.match(RegExp(this.MSG_PATTERN_DATETIME))
    }

    // private processLine(line: string): Message | {} {
    //     const regExpMatchArray = this.matchLine(line)
    //     if(!regExpMatchArray) return {}

    //     return {
    //         date: this.createDate(regExpMatchArray),
    //         text: this.createText(regExpMatchArray)
    //     }
    // }



    // private matchLine(line: string): RegExpMatchArray | null {
    //     const day: string = '([0-9]?[0-9])'
    //     const month: string = '([0-9]?[0-9])'
    //     const year: string = '([0-9]{2})'
    //     const dateSeparator: string = '(\/)'
    //     const dateHourSeparator: string = '(, )'
    //     const hour: string = '([0-9]{2})'
    //     const hourSeparator: string = '(\:)'
    //     const minutes: string = '([0-9]{2})'
    //     const hourUserSeparator: string = '( - )'
    //     const user: string = '([^\:]+)'
    //     const userSeparator: string = '(\:)'
    //     const messsage: string = '([^]*)'

    //     const regexp = RegExp(`${ day }${ dateSeparator }${ month }${ dateSeparator }${ year }${ dateHourSeparator }${ hour }${ hourSeparator }${ minutes }${ hourUserSeparator }${ user }${ userSeparator }${ messsage }`)

    //     return line.match(regexp)
    // }

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
}
