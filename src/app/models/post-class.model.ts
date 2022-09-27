export class PostClass {
    constructor(
        public id: number | null,
        public user_id: number | null,
        public academicsCheckBox: boolean,
        public newsCheckBox: boolean,
        public careerCheckBox : boolean,
        public postText : string
    ) { }
}
