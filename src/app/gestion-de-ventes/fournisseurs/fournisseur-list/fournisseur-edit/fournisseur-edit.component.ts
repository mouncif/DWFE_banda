import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FournisseurService } from '../../../services/fournisseur.service';
import { Fournisseur } from '../../../models/fournisseur.model';
import { AuthenticationService } from '../../../../utilisateurs-et-droits/services/authentication.service';
import { Role } from '../../../../utilisateurs-et-droits/models/role.model';


@Component({
  selector: 'app-fournisseur-edit',
  templateUrl: './fournisseur-edit.component.html',
  styleUrls: ['./fournisseur-edit.component.css']
})
export class FournisseurEditComponent implements OnInit {
  fournisseur: Fournisseur = new Fournisseur();
  id: number;

  constructor(
    private fournisseurService: FournisseurService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
      if(this.authenticationService.currentUserValue.role != Role.Admin && this.authenticationService.currentUserValue.role != Role.Editor ){
        this.router.navigate(["/", "produits"]);
      }
      this.id = this.activatedRoute.snapshot.params.id;
      this.fournisseurService.findFournisseur(this.id).subscribe(
        (fournisseur) => {
          this.fournisseur = fournisseur;
        }
      )
  }

  onClickSave() {
      this.fournisseurService.update(this.fournisseur).subscribe();
  }

  onClickReset(){
    this.fournisseurService.findFournisseur(this.id).subscribe(
      (client) => {
        this.fournisseur = client;
      }
    )
  }

  onClickDelete(){
    this.fournisseurService.delete(this.fournisseur.id).subscribe();
  }
}
