import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostViewComponent } from './components/post-view/post-view.component';
import { NewPostComponent } from './components/new-post/new-post.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', component: PostsComponent,
    children: [
      { path: 'post/:id/:mode', component: PostViewComponent },
	 
      // { path: 'add-student', component: AddStudentComponent },
    ],}, 
  { path: 'newPost', component: NewPostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
