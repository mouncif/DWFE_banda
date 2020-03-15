import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProduitService } from '../../../services/produit.service';
import { Produit } from '../../../models/produit.model';
import { AuthenticationService } from '../../../../utilisateurs-et-droits/services/authentication.service';
import { Role } from '../../../../utilisateurs-et-droits/models/role.model';


@Component({
  selector: 'app-produit-edit',
  templateUrl: './produit-edit.component.html',
  styleUrls: ['./produit-edit.component.css']
})
export class ProduitEditComponent implements OnInit {
  produit: Produit = new Produit();
  id: number;

  constructor(
    private router: Router,
    private produitService: ProduitService,
    private activatedRoute: ActivatedRoute,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
      if(this.authenticationService.currentUserValue.role != Role.Admin && this.authenticationService.currentUserValue.role != Role.Editor ){
        this.router.navigate(["/", "produits"]);
      }
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
