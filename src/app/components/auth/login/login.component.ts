import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { User } from '../../../models/User';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  title:string = "Login | Google Maps, Mikro Case :)";

  loginForm: any;
  login:any;
  user:User;
  router:any;
  message:string;

  private authEmail:string = 'mikro@mikro.com.tr';
  private authPassword:string = '123456';

  constructor(private titleService:Title, router: Router) {
    this.user = new User();
    this.router = router;
    this.message = 'Google Maps\'e hoş geldiniz.';
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

  loginSubmit(loginForm: NgForm):void {
    if(loginForm.valid) {
      if(this.user.Email == this.authEmail && this.user.Password == this.authPassword) {
        this.router.navigate(['/dashboard']);
      } else {
        this.message = 'Kullanıcı adı ya da şifre geçerli değil.';
      }
    }
  }

}
