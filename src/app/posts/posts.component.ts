import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PostClass } from '../models/post-class.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postButtonStatus : boolean = false;

  topics = this.formBuilder.group({
    academics: false,
    news: false,
    career: false,
    postText: new FormControl('', [Validators.required])
  });

  get academics(): boolean { return Boolean(this.topics.get('academics')?.value)}
  get news(): boolean { return Boolean(this.topics.get('news')?.value)}
  get career(): boolean { return Boolean(this.topics.get('career')?.value)}
  get postText(): string { return String(this.topics.get('postText')?.value) }

  constructor(
    private formBuilder: FormBuilder,
    private postService : PostService
  ) { }

  postButtonClicked(){
    this.postButtonStatus = true;
  }

  ngOnInit(): void {
  }

  prepareSave(): PostClass {
    return new PostClass(
      null,
      null,
      this.academics,
      this.news,
      this.career,
      this.postText
    )
  }

  savePost(): void {
    if (this.topics.valid) {
      let post = this.prepareSave();
      //this.postService.postUser(post).subscribe()
    }
  }

}
