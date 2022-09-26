export class Messages {
    constructor(
        public message_id: number | null,
        public user_id: number | null,
        public fromLastName: string,
        public fromFirstName: string,
        public toLastName: string,
        public toFirstName: string,
        public messageText: string,
        public sentDateTime: Date
    ) { }

}
