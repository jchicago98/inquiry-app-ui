import { createAccount } from "./create.account";

describe('createAccount',()=>{
    it('should create an instance ' , ()=>{
        expect(new createAccount("1","Jorge","Morin",7/10/1998, "jorge.morin@cognizant.com","password","password")).toBeTruthy();
    });
});