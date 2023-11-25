import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/shared/models/post.model';
import { PostsService } from 'src/app/shared/services/posts.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss'],
})
export class PostViewComponent implements OnInit , OnDestroy {
  post!: Post;
  mode: string = 'view';
  postId: any;
  
  constructor( private postsService: PostsService, private activatedRoute: ActivatedRoute, public usersService: UsersService, private router: Router) {}
  
  ngOnInit(): void {
    this.postId = this.activatedRoute.snapshot.paramMap.get('id');
    let a = this.activatedRoute.snapshot.paramMap.get('mode');
    this.mode = a != null ? a : 'view';
	this.postsService.chengeEdit(this.mode == 'edit')
    this.getPost();

  }

  getPost() {
    this.postsService.getPosts('posts/' + this.postId).subscribe({
    next: (res: Post) => {
		this.post = res;
		
	},
    error: (e) => {
		console.error(e);
		this.router.navigate(['posts']);
	}
})

  }

  chengeMode(mode: string) {
	if (mode == 'edit') {
		this.mode = 'edit' ;
		this.postsService.chengeEdit(true)
	} else {
		this.mode = 'view';
		this.postsService.chengeEdit(false)
	}

  }

ngOnDestroy() {
    this.postsService.chengeEdit(false)
  }
}
