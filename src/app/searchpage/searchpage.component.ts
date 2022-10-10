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

  postCreated?: PostClass[];
  filteredPosts?: PostClass[];
  reportedPostsCreated?: PostClass[];
  singlePost?: PostClass;
  searchText: string = "";
  isCartActive: boolean = false;
  reportPostStatus: boolean = false;

  constructor(
    private router: Router,
    private postService: PostService
  ) { }

  loadPosts(): void {
    this.postService.getAllPosts().subscribe(
      res => {
        this.postCreated = res;
        this.reportedPostsCreated = this.postCreated?.filter(
          reportedStatus => reportedStatus.reportPostStatus == false
        );
      }
    );
  }

  ngOnInit(): void {
    this.loadPosts();
  }

  search() {
    this.filteredPosts = this.postCreated?.filter(post =>
      post.subjectLine.includes(this.searchText) || post.postText.includes(this.searchText)
    );
  }

  prepareUpdate(): PostClass {
    return new PostClass(
      Number(this.singlePost?.post_id),
      this.singlePost?.sender,
      String(this.singlePost?.subjectLine),
      Boolean(this.singlePost?.academicsCheckBox),
      Boolean(this.singlePost?.newsCheckBox),
      Boolean(this.singlePost?.careerCheckBox),
      String(this.singlePost?.postText),
      Number(this.singlePost?.postPrice),
      this.isCartActive,
      this.reportPostStatus
    )
  }

  addToCart(post_id: number | null) {
    this.isCartActive = true;
    this.postService.getPostById(post_id).subscribe(
      res => {
        this.singlePost = res;
        console.log(res);
      }
    );
    //console.log("THIS IS THIS.PREPARE().CARTACTIVE: "+this.prepareUpdate().cartActive)
    let updatePost = this.prepareUpdate();
    this.postService.updatePost(updatePost).subscribe(
      () => console.log("Post cart status updated to TRUE")
    );


  }

  reportPost(post_id: number | null) {
    this.reportPostStatus = true;
  }

  reportPostFinal(post_id: number | null) {
    this.postService.getPostById(post_id).subscribe(
      res => {
        this.singlePost = res;
        console.log(res);
      }
    );
    //console.log("THIS IS THIS.PREPARE().CARTACTIVE: "+this.prepareUpdate().cartActive)
    let updatePost = this.prepareUpdate();
    this.postService.updatePost(updatePost).subscribe(
      () => console.log("Report Post status updated to TRUE")
    );
    this.reportPostStatus = false;
    window.location.reload();
  }

}

