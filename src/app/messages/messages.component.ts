import { Component, OnInit } from '@angular/core';
import { InquiryUser } from '../models/inquiry-user.account';
import { InquiryService } from '../services/inquiry.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  inquiryUsers?: InquiryUser[]
  messageReceiver?: InquiryUser;
  constructor(private inquiryService:InquiryService) { }

  loadInquiryUsers(){
    this.inquiryService.getAllUsers().subscribe(res =>
      this.inquiryUsers = res
    );
  }

  selectMessageReceiver(receiverEmail:String){
    this.messageReceiver = this.inquiryUsers?.find(user=>user.email == receiverEmail);
  }

  ngOnInit(): void {
    this.loadInquiryUsers();
  }

}
