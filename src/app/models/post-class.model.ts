import { InquiryUser } from "./inquiry-user.account";

export class PostClass {
    constructor(
        public post_id: number | null,
        public sender: InquiryUser | undefined,
        public subjectLine: string,
        public academicsCheckBox: boolean,
        public newsCheckBox: boolean,
        public careerCheckBox : boolean,
        public postText : string,
        public postPrice : number,
        public cartActive : boolean,
        public reportPostStatus : boolean
    ) { }
}
