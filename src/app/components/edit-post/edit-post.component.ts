import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from 'src/app/shared/models/post.model';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit, OnChanges , OnDestroy  {

@Input() post! :Post
@Output() closeEdit = new EventEmitter<any>();
 postForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required])
  });
  loader = false
  valid = false
  messeg_error = {title: '', body: ''};
  constructor( private postsService: PostsService, private router: Router) { }

  ngOnInit(): void {


  }

checkValid(){
	this.messeg_error.body = this.postForm.controls.body.valid ? '' :'שדה חובה'
	this.messeg_error.title = this.postForm.controls.title.valid ? '' :'שדה חובה'
}

userClicked(){
	if (this.valid) {
		this.checkValid()
	}
}
ngOnChanges (){
	if (this.post) {
		this.postForm.controls['title'].setValue(this.post.title);
		this.postForm.controls['body'].setValue(this.post.body);	
	}

}

change_userId(){
console.log(this.postForm.value);

}
onSubmit(){
	this.checkValid()
	this.valid = true
	this.loader = true
	if (this.postForm.valid) {
		let updatePost ={id : this.post.id, userId: this.post.userId, title : this.postForm.controls.title.value, body :  this.postForm.controls.body.value}
			console.log("onSubmit",  updatePost);

		this.postsService.updatePost(updatePost,this.post.id).subscribe({
			next: (res: Post) => {
				this.post = res;
				console.log("this.post:",this.post);
				this.closeEdit.emit();
			},
			error: (e) => {
				console.error(e);
				this.closeEdit.emit();
			}
		})		
	} else {
		this.loader = false
	}

}

ngOnDestroy() {
    this.postForm.reset;
	this.loader = false
  }
}
