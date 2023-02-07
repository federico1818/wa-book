import { Injectable } from '@angular/core'
import { Chat } from 'src/app/chat/chat'
import { Message } from 'src/app/chat/messages/message'
import { TxtPattern } from 'src/app/chat/parser/txt-pattern'
import { MediaMessageFactory } from 'src/app/chat/messages/media-message-factory'

@Injectable({
    providedIn: 'root'
})

export class TxtParserService {
    private _chat: Chat = new Chat
    private _mediaMessageFactory: MediaMessageFactory = new MediaMessageFactory(this._chat)

    public parse(content: string): Chat {
        const lines = content.split(/\r?\n/)

        return this.processLines(lines)
    }

    private processLines(lines: String[]): Chat {
        lines.forEach((line: String) => {
            const message: Message = this.getMessage(line)
            this._chat.addMessage(message)
        })
        return this._chat
    }

    private getMessage(line: String) {
        let matchMsg!: RegExpMatchArray | null

        matchMsg = this.matchMediaMessage(line)
        if(matchMsg)
            return this._mediaMessageFactory.createMessage(matchMsg)

        return line
    }

    private matchMediaMessage(line: String): RegExpMatchArray | null {
        return line.match(RegExp(TxtPattern.MSG_MEDIA))
    }
}
