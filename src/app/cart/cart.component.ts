import { Component, OnInit } from '@angular/core';
import { PostClass } from '../models/post-class.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  postCreated?: PostClass[];
  isActiveCart?: PostClass[];
  singlePost?: PostClass;
  subTotalCost: number = 0;
  isCartActive: boolean = false;
  noOfItems: number = 0;
  salesTax : number = 0;
  totalCost : number = 0;

  constructor(
    private postService: PostService
    ) { }

  loadCartActivePosts(): void {
    this.postService.getAllPosts().subscribe(
      res => {
        this.postCreated = res;
        this.postCreated = this.postCreated?.filter(
          reportStatus => reportStatus.reportPostStatus == false
        );
        this.isActiveCart = this.postCreated?.filter(
          post => post.cartActive == true
        );
        this.isActiveCart?.filter(
          post => {
            this.subTotalCost = post.postPrice + this.subTotalCost;
          }
        );
        this.salesTax = Number((this.subTotalCost * 0.0625).toFixed(2));
        this.totalCost = Number((this.salesTax + this.subTotalCost).toFixed(2));
        this.noOfItems = this.isActiveCart?.length;
      }

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
      Boolean(this.singlePost?.reportPostStatus)
    )
  }

  removeFromCart(post_id : number | null){
    this.isCartActive = false;
    this.postService.getPostById(post_id).subscribe(
      res => {
        this.singlePost = res;
        console.log(res);
      }
    );
    //console.log("THIS IS THIS.PREPARE().CARTACTIVE: "+this.prepareUpdate().cartActive)
    let updatePost = this.prepareUpdate();
    this.postService.updatePost(updatePost).subscribe(
      () => console.log("Post cart status updated to FALSE")
    );
    window.location.reload();

    }


  ngOnInit(): void {
    this.loadCartActivePosts();
  }

}
