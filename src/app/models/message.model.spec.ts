import { InquiryUser } from './inquiry-user.account';
import { Message } from './message.model';

describe('Messages', () => {
  it('should create an instance', () => {
    expect(new Message(1,new InquiryUser(1,"Jorge","Morin",new Date("07/10/1998"),"jorge.morin@cognizant.com"), new InquiryUser(1,"Jorge","Morin",new Date("07/10/1998"),"jorge.morin@cognizant.com"), "This is a test", new Date("07/10/1998"))).toBeTruthy();
  });
});
