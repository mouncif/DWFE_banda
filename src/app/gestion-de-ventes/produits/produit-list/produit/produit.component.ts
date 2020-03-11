import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';
import { ProduitService } from '../../../services/produit.service';
import { Produit } from '../../../models/produit.model';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  @Input("produitItem") produit: Produit;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickProduit(){
      this.router.navigate(['/', 'produits', 'details', this.produit.id]);
      console.log("clicked");
  }
}
