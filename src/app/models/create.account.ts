export class createAccount {
    constructor(
        public id: number | null,
        public firstName: string,
        public lastName: string,
        public yearBorn: Date,
        public email: string,
        public password: string
    ) { }
}