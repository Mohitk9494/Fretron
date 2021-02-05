import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { AuthserviceService } from "../authservice.service";
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  betoken;
  user: User = {
    mobileNumber: "",
    password: "",
    loginType: "password" 
  }


  constructor(private authservice: AuthserviceService, private _router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.authservice.login(this.user).subscribe((res) => {
      if (res.status == 200) {
        this.betoken = res.data.token;
        localStorage.setItem('_token', this.betoken);
        this._router.navigate(['issue-tracking']);
      } else {
        console.log(res.error);

      }
    },
      () => console.log("network error")
    )
  }
}
