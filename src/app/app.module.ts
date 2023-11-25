import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostViewComponent } from './components/post-view/post-view.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PostCardComponent } from './components/post-card/post-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HeaderComponent } from './components/header/header.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { MyHttpInterceptorInterceptor } from './my-http-interceptor.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    PostViewComponent,
    PostCardComponent,
    HeaderComponent,
    EditPostComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	FormsModule,
    Ng2SearchPipeModule,
	ReactiveFormsModule
  ],
  providers: [ {
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptorInterceptor,
      multi: true,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
