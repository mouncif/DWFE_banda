import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Client } from '../models/client.model'


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private url = 'http://localhost:3000/Clients';



  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<Client[]>(this.url);
  }

  add(client) {
    return this.http.post<Client>(this.url, client);
  }

  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }

  update(client) {
    return this.http.put(`${this.url}/${client.id}`, client);
  }

  findCleint(id) {
    return this.http.get<Client>(`${this.url}/${id}`);
  }
}
