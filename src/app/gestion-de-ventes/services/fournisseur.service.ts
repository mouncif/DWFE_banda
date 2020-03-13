import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Fournisseur } from '../models/fournisseur.model';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  private url = 'http://localhost:3000/Fournisseurs';

  fournisseurs: Fournisseur[] = [
      new Fournisseur(1, "chiku", "cj", "settat", "adresse", "liji", "oijk", "lji", "oijk"),
      new Fournisseur(2, "chiku", "cj", "settat", "adresse", "liji", "oijk", "lji", "oijk")
  ]

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<Fournisseur[]>(this.url);
  }

  add(client) {
    return this.http.post<Fournisseur>(this.url, client);
  }

  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }

  update(client) {
    return this.http.put(`${this.url}/${client.id}`, client);
  }

  findFournisseur(id) {
    return this.http.get<Fournisseur>(`${this.url}/${id}`);
  }
}
