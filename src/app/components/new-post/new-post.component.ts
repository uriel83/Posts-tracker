import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from 'src/app/shared/models/post.model';
import { PostsService } from 'src/app/shared/services/posts.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {


   postForm = new FormGroup({
	userId : new FormControl(null, [Validators.required]),
    title: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required])
  });
loader = false
valid = false
  messeg_error = {userId: '',
                  title: '',
                  body: ''};

  constructor(private postsService: PostsService, public usersService: UsersService,   private router: Router) { }

	ngOnInit(): void {
	}
	checkValid(){
		this.messeg_error.body = this.postForm.controls.body.valid ? '' :'שדה חובה'
		this.messeg_error.title = this.postForm.controls.title.valid ? '' :'שדה חובה'
		this.messeg_error.userId = this.postForm.controls.userId.valid ? '' :'שדה חובה'	
	}

	userClicked(){
		if (this.valid) {
			this.checkValid()
		}
	}
	onSubmit(){
		this.loader = true
		this.checkValid()
		this.valid = true
		if (this.postForm.valid) {
			console.log("onSubmit",this.postForm.value);
			this.loader = true
			let newPost ={userId :this.postForm.controls.userId.value, title : this.postForm.controls.title.value, body :  this.postForm.controls.body.value}
				console.log("onSubmit",  newPost);

			this.postsService.creatPost(newPost).subscribe({
				next: (res: Post) => {
					console.log("this.post:",res);
					this.router.navigateByUrl('/posts' );
				},
				error: (e) => {
					console.error(e);
				}
			})

		}
		else{
			this.loader = false
		}
		
		}
}
