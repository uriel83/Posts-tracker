import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 classBC = "none"
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {

    this.postsService.edit$.subscribe((edit) => {
		this.classBC = edit ? 'edit' : 'none'
        
    });
  }

}
