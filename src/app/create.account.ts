export class createAccount {
    constructor(
        public id: string | null,
        public firstName: string,
        public lastName: string,
        public yearStarted: number,
        public email: string,
        public password: string,
        public reEnteredPassword : string
    ) { }
}