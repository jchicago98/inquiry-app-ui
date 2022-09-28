import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PostClass } from '../models/post-class.model';
import { PostService } from '../services/post.service';
import { InquiryUser } from '../models/inquiry-user.account';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postButtonStatus : boolean = false;
  messageSender?: InquiryUser;

  topics = this.formBuilder.group({
    subjectLine: new FormControl('', [Validators.required]),
    academics: false,
    news: false,
    career: false,
    postText: new FormControl('', [Validators.required])
  });

  get subjectLine(): string { return String(this.topics.get('subjectLine')?.value)}
  get academics(): boolean { return Boolean(this.topics.get('academics')?.value)}
  get news(): boolean { return Boolean(this.topics.get('news')?.value)}
  get career(): boolean { return Boolean(this.topics.get('career')?.value)}
  get postText(): string { return String(this.topics.get('postText')?.value) }

  constructor(
    private formBuilder: FormBuilder,
    private postService : PostService,
    private router : Router
  ) { }

  postButtonClicked(){
    this.postButtonStatus = true;
  }

  ngOnInit(): void {
  }

  prepareSave(): PostClass {
    return new PostClass(
      null,
      this.messageSender,
      this.subjectLine,
      this.academics,
      this.news,
      this.career,
      this.postText
    )
  }

  savePost(): void {
    if (this.topics.valid) {
      let post = this.prepareSave();
      this.postService.postMessage(post).subscribe();
      this.router.navigate(['/homepage']);
    }
  }

}
