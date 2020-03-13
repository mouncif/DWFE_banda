import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../utilisateurs-et-droits/models/user.model';
import { UserService, } from '../utilisateurs-et-droits/services/user.service';
import { AuthenticationService } from '../utilisateurs-et-droits/services/authentication.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loading = false;
  users: User[];

  constructor(private userService: UserService, private authenticationService: AuthenticationService) { }

  ngOnInit() {
      this.loading = true;
      this.userService.getAll().pipe(first()).subscribe(users => {
          this.loading = false;
          this.users = users;
      });
      console.log(this.authenticationService.currentUserValue);
  }
}
