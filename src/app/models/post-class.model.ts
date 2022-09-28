import { InquiryUser } from "./inquiry-user.account";

export class PostClass {
    constructor(
        public id: number | null,
        public sender: InquiryUser | undefined,
        public academicsCheckBox: boolean,
        public newsCheckBox: boolean,
        public careerCheckBox : boolean,
        public postText : string
    ) { }
}
