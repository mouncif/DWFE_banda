import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../utilisateurs-et-droits/services/authentication.service';
import { UserService } from '../utilisateurs-et-droits/services/user.service';
import { User } from '../utilisateurs-et-droits/models/user.model';
import { Role } from '../utilisateurs-et-droits/models/role.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
      loading = false;
      submitted = false;
      returnUrl: string;
      error = '';
      users: User[];
      adminExample: User;
      userExample: User;
      editorExample: User;

      constructor(
          private formBuilder: FormBuilder,
          private route: ActivatedRoute,
          private router: Router,
          private authenticationService: AuthenticationService,
          private userService: UserService
      ) {
          // redirect to home if already logged in
          if (this.authenticationService.currentUserValue) {
              this.router.navigate(['/']);
          }
      }
      ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        this.userService.findAll().subscribe(
          (users) => {
            this.users = users;
            for(let i = 0; i < this.users.length; i++){
              if(this.users[i].role == Role.Admin){
                this.adminExample = this.users[i];
                break;
              }
            }
            for(let i = 0; i < this.users.length; i++){
              if(this.users[i].role == Role.User){
                this.userExample = this.users[i];
                break;
              }
            }
            for(let i = 0; i < this.users.length; i++){
              if(this.users[i].role == Role.Editor){
                this.editorExample = this.users[i];
                break;
              }
            }
          }
        );
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value, this.users)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.error = error;
                    this.loading = false;
                });
    }
}
