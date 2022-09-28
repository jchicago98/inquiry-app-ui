import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostClass } from '../models/post-class.model';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {

  postCreated ?: PostClass[];

  constructor(
    private router: Router,
    private postService : PostService
    ) { }

    loadPosts(): void{
      this.postService.getAllPosts().subscribe(
        res => this.postCreated = res
      );
    }

  ngOnInit(): void {
    this.loadPosts();
  }

}
