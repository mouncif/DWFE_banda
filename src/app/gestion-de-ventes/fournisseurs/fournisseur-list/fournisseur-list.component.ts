import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';


import { FournisseurService } from '../../services/fournisseur.service';
import  { Fournisseur } from '../../models/fournisseur.model';
import { AuthenticationService } from '../../../utilisateurs-et-droits/services/authentication.service';
import { Role } from '../../../utilisateurs-et-droits/models/role.model';


@Component({
  selector: 'app-fournisseur-list',
  templateUrl: './fournisseur-list.component.html',
  styleUrls: ['./fournisseur-list.component.css']
})
export class FournisseurListComponent implements OnInit {
  fournisseurs: Fournisseur[];
  displayedColumns: string[] = ['id', 'nom', 'nom_court', 'ville', 'adresse', 'tel_fix', 'tel_mobile', 'fax', 'email', 'action'];
  dataSource;
  isAdminOrEditor: boolean = false;

  constructor(
    private fournisseurService: FournisseurService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
      this.fournisseurService.findAll().subscribe(
        (fournisseurs) => {
          this.fournisseurs = fournisseurs;
          this.dataSource = new MatTableDataSource(this.fournisseurs);
        }
      );
      if(this.authenticationService.currentUserValue.role == Role.Admin || this.authenticationService.currentUserValue.role == Role.Editor ){
        this.isAdminOrEditor = true;
      }
    }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onClickModifier(id){
      this.router.navigate(["/", "fournisseurs", "edit", id]);
  }

}
