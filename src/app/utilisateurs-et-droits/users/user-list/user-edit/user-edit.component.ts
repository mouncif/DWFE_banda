import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user.model';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  users: User[];
  user: User = new User();
  id: number;

  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
      this.id = this.activatedRoute.snapshot.params["id"];
      this.userService.getAll().subscribe(
          (users) => {
              this.users = users;
              for(let i = 0; i < this.users.length; i++){
                  if(this.id == this.users[i].id){
                      this.user = this.users[i];
                  }
              }
          }
      );
  }

}
