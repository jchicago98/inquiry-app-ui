import { InquiryUser } from "./inquiry-user.account";

describe('createAccount',()=>{
    it('should create an instance ' , ()=>{
        expect(new InquiryUser(1,"Jorge","Morin",new Date("7/10/1998"), "jorge.morin@cognizant.com")).toBeTruthy();
    });
});