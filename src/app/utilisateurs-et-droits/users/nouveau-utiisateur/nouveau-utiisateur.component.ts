import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { Role } from '../../models/Role.model';


@Component({
  selector: 'app-nouveau-utiisateur',
  templateUrl: './nouveau-utiisateur.component.html',
  styleUrls: ['./nouveau-utiisateur.component.css']
})
export class NouveauUtiisateurComponent implements OnInit {
  user: User = new User();
  role: Role;
  id: number;

  constructor(
      private userService: UserService,
      private activatedRoute: ActivatedRoute,
      private router: Router
    ) { }


  ngOnInit() {}

    onClickSave() {
        this.userService.add(this.user).subscribe();
        this.router.navigate(["/", "utilisateurs"]);
    }

    onFileSelected(event){
      this.user.photo = "./assets/img/" + event.target.files[0].name;
    }

}
