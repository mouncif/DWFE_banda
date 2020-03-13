import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';


import { FournisseurService } from '../services/fournisseur.service';
import  { Fournisseur } from '../models/fournisseur.model';

@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.component.html',
  styleUrls: ['./fournisseurs.component.css']
})

export class FournisseursComponent implements OnInit {

  ngOnInit() {

  }



}
