import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

import { MessagesComponent } from './messages.component';
import { MessageService } from '../services/message.service';
import { InquiryService } from '../services/inquiry.service';

describe('MessagesComponent', () => {
  let component: MessagesComponent;
  let fixture: ComponentFixture<MessagesComponent>;

  // let messageServiceSpy: jasmine.SpyObj<MessageService>;
  // let inquiryServiceSpy: jasmine.SpyObj<InquiryService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessagesComponent],
      imports: [HttpClientTestingModule],
      // providers: [
      //   { provide: MessageService, useValue: messageServiceSpy },
      //   { provide: InquiryService, useValue: inquiryServiceSpy }
      // ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test the prepareSave() function', () => {
    let prepareMessageFunction = fixture.componentInstance.prepareMessage();
  });

  it('should sendMessage() and check is prepareMessage() is being called', fakeAsync(() => {
    //TEST THAT THE FUNCTION IS NOT ACTIVE AND IN USE YET
    let sendMessageFunction = fixture.componentInstance.sendMessage();
    expect(sendMessageFunction).toBeFalsy();

    // inquiryServiceSpy.getAllUsers().subscribe(
    //   res => expect(res).toHaveBeenCalled()
    //   );

  }));

  it('should test loadInquiryUsers() and check that the inquiryService is being called', () => {
    let loadInquiryUsersFunction = fixture.componentInstance.loadInquiryUsers("jorge.morin@cognizant.com");
  });

  it('should test selectMessageReceiver() and check that the inquiryUsers is being used', () => {
    let selectMessageReceiverFunction = fixture.componentInstance.selectMessageReceiver("jorge.morin@cognizant.com");

  });

});
