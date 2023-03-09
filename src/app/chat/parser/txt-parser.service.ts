import { Injectable } from '@angular/core'
import { Chat } from 'src/app/chat/chat'
import { Message } from 'src/app/chat/messages/message'
import { MediaMessageFactory } from 'src/app/chat/messages/media-message-factory'
import { TextMessageFactory } from 'src/app/chat/messages/text-message-factory'
import { InfoMessageFactory } from 'src/app/chat/messages/info-message-factory'

@Injectable({
    providedIn: 'root'
})

export class TxtParserService {
    private _chat: Chat = new Chat
    private _mediaMessageFactory: MediaMessageFactory = new MediaMessageFactory(this._chat)
    private _textMessageFactory: TextMessageFactory = new TextMessageFactory(this._chat)
    private _infoMessageFactory: InfoMessageFactory = new InfoMessageFactory(this._chat)

    public parse(content: string): Chat {
        const lines = content.split(/\r?\n/)

        return this.processLines(lines)
    }

    private processLines(lines: String[]): Chat {
        lines.forEach(this.addMessage.bind(this))
        return this._chat
    }

    private addMessage(line: String): void {
        const message: Message | String = this.getMessage(line)

        if(typeof message == "string") {
            this._chat.addLineToLastMessage(message)
        }
        else {
            this._chat.addMessage(message)
        }
    }

    private getMessage(line: String): Message | String {
        let matchMsg!: RegExpMatchArray | null

        matchMsg = line.match(RegExp(this._mediaMessageFactory.PATTERN))
        if(matchMsg)
            return this._mediaMessageFactory.createMessage(matchMsg)

        matchMsg = line.match(RegExp(this._textMessageFactory.PATTERN))
        if(matchMsg)
            return this._textMessageFactory.createMessage(matchMsg)

        matchMsg = line.match(RegExp(this._infoMessageFactory.PATTERN))
        if(matchMsg)
            return this._infoMessageFactory.createMessage(matchMsg)

        return line
    }
}
