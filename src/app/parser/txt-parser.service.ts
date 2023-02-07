// import { Injectable } from '@angular/core'
// import { Chat } from 'src/app/chat/chat'
// import { User } from 'src/app/chat/user'
// import { Message } from 'src/app/chat/messages/message'
// import { TextMessage } from 'src/app/chat/messages/text-message'
// import { InfoMessage } from 'src/app/chat/messages/info-message'
// import { MediaMessage } from 'src/app/chat/messages/media-message'

// @Injectable({
//     providedIn: 'root'
// })

// export class TxtParserService {
//     private _chat: Chat = new Chat

//     constructor() {}

//     public parse(content: string) {
//         const lines = content.split(/\r?\n/)

//         return this.processLines(lines)
//     }

//     private processLines(lines: String[]) {
//         lines.forEach((line: String) => {
//             const message: Message = this.getMessage(line)
//             this._chat.addMessage(message)
//         })
//         return this._chat
//     }

//     private processLines(lines: String[]): Chat {
//         let prevUser!: User
//         let prevDate!: Date

//         const message: Message = this.getMessage(lines[0])

//         lines.forEach((line: String) => {
//             const message: Message = this.getMessage(line)
//             this._chat.messages.push(message)
//         })

//         return this._chat
//     }

//     private getMessage(line: String) {
//         let matchMsg!: RegExpMatchArray | null

//         matchMsg = this.matchMediaMessage(line)
//         if(matchMsg)
//             return this.createMediaMessage(matchMsg)

//         return line
//     }

//     private getMessage(line: String): Message {
//         let matchMsg!: RegExpMatchArray | null

//         matchMsg = this.matchMediaMessage(line)
//         if(matchMsg)
//             return this.createMediaMessage(matchMsg)

//         matchMsg = this.matchFullMessage(line)
//         if(matchMsg)
//             return this.createFullTextMessage(matchMsg)

//         matchMsg = this.matchInfoMessage(line)
//         if(matchMsg)
//             return this.createInfoMessage(matchMsg)

//         return this.createLineMessage(line)
//     }

//     private matchMediaMessage(line: String): RegExpMatchArray | null {
//         return line.match(RegExp(TxtPattern.MSG_MEDIA))
//     }

//     private matchFullMessage(line: String): RegExpMatchArray | null {
//         return line.match(RegExp(TxtPattern.MSG_FULL))
//     }

//     private matchInfoMessage(line: String): RegExpMatchArray | null {
//         return line.match(RegExp(TxtPattern.MSG_INFO))
//     }

//     private createMediaMessage(array: RegExpMatchArray): MediaMessage {

//     }

//     private createLineMessage(line: String): Message {
//         return {
//             message: line,
//             type: 'line'
//         }
//     }

//     private createFullTextMessage(array: RegExpMatchArray): TextMessage {
//         return {
//             date: this.createDate(array),
//             message: this.createText(array),
//             user: this.getUser(array),
//             type: 'text'
//         }
//     }

//     private createInfoMessage(array: RegExpMatchArray): InfoMessage {
//         return {
//             date: this.createDate(array),
//             message: array[11],
//             type: 'info'
//         }
//     }

//     private getUser(array: RegExpMatchArray): User {
//         return this._chat.getFirstUserOrCreate(array[11])
//     }

//     private createText(array: RegExpMatchArray): string {
//         return array[13]
//     }
// }
