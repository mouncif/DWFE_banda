import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User = new User();
  id: number;

  constructor(
      private userService: UserService,
      private activatedRoute: ActivatedRoute,
      private router: Router
    ) { }


  ngOnInit() {
      this.id = this.activatedRoute.snapshot.params["id"];
      this.userService.findUser(this.id).subscribe(
          (user) => {
              this.user = user;
          }
      );


  }

  onClickModifier(){
      this.router.navigate(["/", "utilisateurs", "edit", this.id]);
  }

}
