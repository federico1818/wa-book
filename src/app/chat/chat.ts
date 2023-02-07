import { User } from "src/app/chat/user"
import { Message } from "src/app/chat/messages/message"

export class Chat {
    public users: User[] = []
    private _messages: Message[] = []

    public addMessage(message: Message): void {
        this._messages.push(message)
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
