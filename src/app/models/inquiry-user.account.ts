export class InquiryUser {
    constructor(
        public id: number | null,
        public firstName: string,
        public lastName: string,
        public yearBorn: Date,
        public email: string
    ) { }
}