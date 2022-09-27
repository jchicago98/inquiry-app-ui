import { Component, OnInit } from '@angular/core';
import { InquiryUser } from '../models/inquiry-user.account';
import { Message } from '../models/message.model';
import { AuthService } from '../services/auth.service';
import { InquiryService } from '../services/inquiry.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  inquiryUsers?: InquiryUser[];
  messageReceiver?: InquiryUser;
  messageSender?: InquiryUser;
  messageText: string = "";
  messageThread?: Message[];

  constructor(
    private inquiryService:InquiryService,
    private messageService: MessageService,
    private authService: AuthService
  ) { }

  loadInquiryUsers(currentUserEmail: string){
    this.inquiryService.getAllUsers().subscribe(res => {
      this.messageSender = res.find( user => user.email == currentUserEmail)
      this.inquiryUsers = res.filter(user => user.email != currentUserEmail)
    });
  }

  selectMessageReceiver(receiverEmail:String){
    this.messageReceiver = this.inquiryUsers?.find(user=>user.email == receiverEmail);
    this.messageService.getMessageThread(this.messageSender?.id).subscribe(
       res => {
        this.messageThread = res;
       }
    );
  }

  sendMessage(){
    let message = this.prepareMessage();
    this.messageService.postMessage(message).subscribe(
      res => console.log(res)
    )
  }

  prepareMessage():Message{
    return new Message(
      null,
      this.messageSender,
      this.messageReceiver,
      this.messageText,
      new Date()
    )
  }

  ngOnInit(): void {
    this.authService.getUserEmail().then(
      userEmail => this.loadInquiryUsers(userEmail)
    )
  }

}
