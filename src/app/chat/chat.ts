import { User } from "src/app/chat/user"
import { Message } from "src/app/chat/messages/message"
import { TextMessage } from "src/app/chat/messages/text-message"

export class Chat {
    public users: User[] = []
    private _messages: (Message | String)[] = []

    public addMessage(message: Message | String): void {
        this._messages.push(message)
    }

    public addLineToLastMessage(line: string): void {
        const textMessage = this._messages.slice(-1)[0] as TextMessage
        textMessage.lines.push(line)
    }

    public getFirstUserOrCreate(name: string): User {
        const user: User | undefined  = this.users.find((user: User) => {
            return user.name === name
        })
        if(!user) {
            return this.createUser(name)
        }
        return user
    }

    private createUser(name: string): User {
        const user = {
            name: name
        }
        this.users.push(user)
        return user
    }
}
