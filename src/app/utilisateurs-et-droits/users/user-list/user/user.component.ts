import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input('userItem') user: User;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickUser(){
      this.router.navigate(['/', 'utilisateurs', 'detail', this.user.id]);
  }

}
