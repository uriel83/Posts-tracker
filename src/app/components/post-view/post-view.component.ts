import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/shared/models/post.model';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {
post! :Post
  constructor(private postsService: PostsService, private activatedRoute: ActivatedRoute)  {
 
}
  ngOnInit(): void {
let postId = this.activatedRoute.snapshot.paramMap.get('id');
console.log("id",postId);



this.getAllPosts(postId)
  }

getAllPosts(postId:any) {
    this.postsService.getPosts('posts/'+ postId).subscribe((res:Post) => {
      this.post = res;
      console.log(this.post);
    });
  }

}
