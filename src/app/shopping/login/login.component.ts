import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/AuthenticationService';
import { User } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  invalidLogin = false;

  constructor(private router: Router, private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {
    this.loginservice.validateUser(new User(this.username, this.password))
          .subscribe((data) => {
           console.log(data);
           if (data) {
            console.log('Success');
            sessionStorage.setItem('username', this.username);
            this.invalidLogin = false;
            this.router.navigate(['/home']);
           } else {
            console.log('Failure');
            this.invalidLogin = true;
          }
        },
        (error) => console.log(error)
    );
  }
}
