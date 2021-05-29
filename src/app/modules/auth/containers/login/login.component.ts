import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '~services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginButtonActive = true;

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(): void {
    this.loginButtonActive = false;
    const { username, password } = this.loginForm.getRawValue();
    this.authService.signIn(username, password)
      .then(data => {
        this.loginButtonActive = true;
        console.log(data);
      })
      .catch(() => this.loginButtonActive = true);
  }
}
