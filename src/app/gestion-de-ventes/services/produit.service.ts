import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Produit } from '../models/produit.model'

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private url = 'http://localhost:3000/Produits';

  constructor(private http: HttpClient) { }

  findAll() {
      return this.http.get<Produit[]>(this.url);
  }

  add(produit) {
      return this.http.post<Produit>(this.url, produit);
  }

  delete(id) {
      return this.http.delete(`${this.url}/${id}`);
  }

  update(produit) {
      return this.http.put(`${this.url}/${produit.id}`, produit);
  }

  findProduit(id) {
      return this.http.get<Produit>(`${this.url}/${id}`);
  }

}
