import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProduitService } from '../../../services/produit.service';
import { Produit } from '../../../models/produit.model';

@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.css']
})
export class ProduitDetailComponent implements OnInit {
  produit: Produit = new Produit();
  id: number;

  constructor(
    private produitService: ProduitService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
      this.id = this.activatedRoute.snapshot.params.id;
      this.produitService.findProduit(this.id).subscribe(
        (produit) => {
          this.produit = produit;
        }
      );
  }

  onClickModifier(){
      this.router.navigate(["/", "produits", "edit", this.id]);
  }

}
