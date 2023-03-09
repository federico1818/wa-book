export class TxtPattern {
    public static readonly day: string = '([0-9]?[0-9])' as const
    public static readonly month: string = '([0-9]?[0-9])' as const
    public static readonly year: string = '([0-9]{2})' as const
    public static readonly dateSeparator: string = '(\/)' as const
    public static readonly dateHourSeparator: string = '(, )' as const
    public static readonly hour: string = '([0-9]{2})' as const
    public static readonly hourSeparator: string = '(\:)' as const
    public static readonly minutes: string = '([0-9]{2})' as const
    public static readonly hourUserSeparator: string = '(\\s\-\\s)' as const
    public static readonly hourMessageSeparator: string = '(\\s\-\\s)' as const
    public static readonly user: string = '([^\:]+)' as const
    public static readonly userSeparator: string = '(\:\\s)' as const
    public static readonly messsage: string = '([^]*)' as const
    public static readonly mediaOmitted: string = '(<Media omitted>)' as const
    public static readonly info: string = '([^]*)' as const
    //private static readonly encrypted: string = 'Messages and calls are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them. Tap to learn more' as const
}
