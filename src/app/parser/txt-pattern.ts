export class TxtPattern {
    private static readonly day: string = '([0-9]?[0-9])' as const
    private static readonly month: string = '([0-9]?[0-9])' as const
    private static readonly year: string = '([0-9]{2})' as const
    private static readonly dateSeparator: string = '(\/)' as const
    private static readonly dateHourSeparator: string = '(, )' as const
    private static readonly hour: string = '([0-9]{2})' as const
    private static readonly hourSeparator: string = '(\:)' as const
    private static readonly minutes: string = '([0-9]{2})' as const
    private static readonly hourUserSeparator: string = '(\\s\-\\s)' as const
    private static readonly user: string = '([^\:]+)' as const
    private static readonly userSeparator: string = '(\:\\s)' as const
    private static readonly messsage: string = '([^]*)' as const

    public static readonly MSG_FULL: string =
        TxtPattern.day +
        TxtPattern.dateSeparator +
        TxtPattern.month +
        TxtPattern.dateSeparator +
        TxtPattern.year +
        TxtPattern.dateHourSeparator +
        TxtPattern.hour +
        TxtPattern.hourSeparator +
        TxtPattern.minutes +
        TxtPattern.hourUserSeparator +
        TxtPattern.user +
        TxtPattern.userSeparator +
        TxtPattern.messsage
}
