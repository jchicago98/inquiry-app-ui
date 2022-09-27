import { InquiryUser } from "./inquiry-user.account";

export class Message {
    constructor(
        public message_id: number | null,
        public sender: InquiryUser | undefined,
        public receiver: InquiryUser | undefined,
        public messageText: string,
        public sentDateTime: Date
    ) { }

}
