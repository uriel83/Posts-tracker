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
  //   users: User[] = [];
  users: any = {};
  constructor(private httpClient: HttpClient) {
    this.getAllUsers();
  }

  getAllUsers() {
    this.httpClient.get(this.baseUrl + this.endUrl).subscribe((data: any) => {
      console.log(data);

      data.forEach((user: any) => {
        this.users[user.id] = user.name;
      });

    //   data.forEach((element: any) => {
    //     let user = { id: element.id, name: element.name };
    //     this.users.push(user);
    //   });
      console.log(this.users);
    });
  }
}
