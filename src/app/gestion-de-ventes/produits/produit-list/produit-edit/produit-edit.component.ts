import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProduitService } from '../../../services/produit.service';
import { Produit } from '../../../models/produit.model';

@Component({
  selector: 'app-produit-edit',
  templateUrl: './produit-edit.component.html',
  styleUrls: ['./produit-edit.component.css']
})
export class ProduitEditComponent implements OnInit {
  produit: Produit;
  tabProduit: Produit[];
  id: number;

  constructor(private produitService: ProduitService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
      this.id = this.activatedRoute.snapshot.params.id;
      this.tabProduit = this.produitService.produits;

      for(let i = 0; i < this.tabProduit.length; i++){
          if(this.id == this.tabProduit[i].id){
              this.produit = this.tabProduit[i];
          }
      }
  }
}
