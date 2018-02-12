import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()

export class User {
  username: string;
  email: string;
}

export class UserService {
  users: User[];
  constructor(private http:HttpClient) { }

  getUsers() {
    this.http.get('gte/user').subscribe(data => {console.log(data); this.users = data as User[];}, error => console.error(error));
    return this.users;
    //return this.http.get('gte/user').pipe(map(data => data['_body']));
    //return this.http.get('gte/user').map((res: Response)=> res.json());
  }

}
