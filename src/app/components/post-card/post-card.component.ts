import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/models/post.model';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
	@Input()post!: Post; 
	moreInfo :boolean = false
  constructor(public usersService: UsersService) { }

  ngOnInit(): void {
  }

}
