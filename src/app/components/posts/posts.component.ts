import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../shared/services/posts.service';
import { Post } from 'src/app/shared/models/post.model';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
 searchText: string = '';
  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.getAllPosts();
  }
  getAllPosts() {
    this.postsService.getPosts('posts').subscribe((res) => {
      this.posts = res;
      console.log(this.posts);
    });
  }

searchByTitle(){
//  if (this.searchText != '') {
	
//  } else {
	
//  }
    return this.posts.filter(post => post.title.includes(this.searchText));
  }

}
