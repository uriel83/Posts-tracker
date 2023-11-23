import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
private baseUrl = 'https://jsonplaceholder.typicode.com/';
  constructor(private httpClient: HttpClient) { }


getPosts(endUrl : string): Observable<any> {
    console.log('servis all posts');

    return this.httpClient.get(this.baseUrl + endUrl)
  }

//   getAllSupervizor(): Observable<any> {
//     console.log('servis all Supervizor');

//     return this.httpClient.get(this.baseUrl + 'login/getAllSupervizor')
//   }
//   getAllUserBySupervizor(supervizor:string): Observable<any>{
//     console.log('servis all Users By Supervizor');
//     return this.httpClient.get(this.baseUrl + 'api/users/getAllUserBySupervizor/'+supervizor)
//   }
//   getUserByName(name: string): Observable<any> {
//     return this.httpClient.get(this.baseUrl + 'api/users/byName/' + name)
//   }
//   getUserByIdNumber(idNumber: number): Observable<any> {
//     return this.httpClient.get(this.baseUrl + 'api/users/byId/' + idNumber)
//   }
//   updateMailUser(idNumber: number, age: number, city: string, country: string, graduation_year: number,
//     academic_institution: string, medical_institution: string, residency: string, department: string): Observable<any> {


//     return this.httpClient.put(this.baseUrl + 'api/users/Id/' + idNumber,
//       { idNumber, age, city, country, graduation_year, academic_institution, medical_institution, residency, department })
//   }

}
