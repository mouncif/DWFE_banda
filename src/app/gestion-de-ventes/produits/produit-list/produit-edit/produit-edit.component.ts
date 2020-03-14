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
  id: number;

  constructor(private produitService: ProduitService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
      this.id = this.activatedRoute.snapshot.params.id;
      this.produitService.findProduit(this.id).subscribe(
        (produit) => {
            this.produit = produit;
        }
      )
  }

  onClickSave() {
      this.produitService.update(this.produit).subscribe();
  }

  onClickReset(){
    this.produitService.findProduit(this.id).subscribe(
      (client) => {
        this.produit = client;
      }
    )
  }

  onClickDelete(){
    this.produitService.delete(this.produit.id).subscribe();
  }
}
