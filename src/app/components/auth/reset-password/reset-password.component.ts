import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { User } from '../../../models/User';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})

export class ResetPasswordComponent implements OnInit {
  title:string = "Reset Password | Google Maps, Mikro Case :)";

  resetForm:any;
  login:any;
  user:User;
  router:any;
  
  constructor(private titleService:Title, router: Router) {
    this.user = new User();
    this.router = router;
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

  resetSubmit(resetForm: NgForm):void {
    this.router.navigate(['']);
  }

}
