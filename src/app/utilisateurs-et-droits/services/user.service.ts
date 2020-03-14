import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
    private url = 'http://localhost:3000/Users';
    public users: User[];


    getAll() {
        return this.http.get<User[]>('http://localhost:4000/users');
    }

    constructor(private http: HttpClient) {
      this.findAll().subscribe(
        (users) => {
          this.users = users;
        },
      )
    }

    findAll() {
      return this.http.get<User[]>(this.url);
    }

    add(user) {
      return this.http.post<User>(this.url, user);
    }

    delete(id) {
      return this.http.delete(`${this.url}/${id}`);
    }

    update(user) {
      return this.http.put(`${this.url}/${user.id}`, user);
    }

    findUser(id) {
      return this.http.get<User>(`${this.url}/${id}`);
    }

    
}
