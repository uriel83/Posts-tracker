import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/';
//  headers = {'Content-type': 'application/json; charset=UTF-8'}

  private editSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public edit$: Observable<any> = this.editSubject.asObservable();
  
  constructor(private httpClient: HttpClient) {}

  chengeEdit(edit: boolean) {
    this.editSubject.next(edit);
  }

  getPosts(endUrl: string): Observable<any> {
    return this.httpClient.get(this.baseUrl + endUrl);
  }

  creatPost(post: any): Observable<any> {
    return this.httpClient.post(this.baseUrl + 'posts/', { post });
  }

  updatePost(post: any, postId: number): Observable<any> {
    return this.httpClient.put(this.baseUrl + 'posts/' + postId, { post });
  }
}
