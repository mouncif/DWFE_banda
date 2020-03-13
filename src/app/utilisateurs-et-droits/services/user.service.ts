import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
    private url = 'http://localhost:3000/Clients';

    getAll() {
        return this.http.get<User[]>('http://localhost:4000/users');
    }

    constructor(private http: HttpClient) { }

    findAll() {
      return this.http.get<User[]>(this.url);
    }

    add(client) {
      return this.http.post<User>(this.url, client);
    }

    delete(id) {
      return this.http.delete(`${this.url}/${id}`);
    }

    update(client) {
      return this.http.put(`${this.url}/${client.id}`, client);
    }

    findCleint(id) {
      return this.http.get<User>(`${this.url}/${id}`);
    }
}
