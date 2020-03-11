import { Injectable } from '@angular/core';
import { Produit } from '../models/produit.model'

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  produits: Produit[] = [
    new Produit(1, "mac book", "mac", 5000, 10000, 500, 550, "image", 100, 30),
    new Produit(2, "hp envy", "hp", 5000, 10000, 500, 550, "image", 100, 30)
  ];
  
  constructor() { }
}
