import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Fournisseur } from '../models/fournisseur.model';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  private url = 'http://localhost:3000/Fournisseurs';



  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<Fournisseur[]>(this.url);
  }

  add(fournisseur) {
    return this.http.post<Fournisseur>(this.url, fournisseur);
  }

  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }

  update(fournisseur) {
    return this.http.put(`${this.url}/${fournisseur.id}`, fournisseur);
  }

  findFournisseur(id) {
    return this.http.get<Fournisseur>(`${this.url}/${id}`);
  }
}
