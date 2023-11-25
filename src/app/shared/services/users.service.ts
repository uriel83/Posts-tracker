import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/';
  private endUrl = 'users';
  users: any = {};
  usersList: User[] = []

  constructor(private httpClient: HttpClient) {
    this.getAllUsers();
  }

  getAllUsers() {
    this.httpClient.get(this.baseUrl + this.endUrl).subscribe((data: any) => {
      data.forEach((user: any) => {
        this.users[user.id] = user.name;
        this.usersList.push({ id: user.id, name: user.name });
      });
    });
  }
}
