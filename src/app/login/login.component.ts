import { AuthService } from './../core/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login_pass_available: Boolean = false;

  constructor(private userService: AuthService) { }

  ngOnInit() {
  }

  googleLogin(){
    this.userService.googleLogin().then(a=>{
      console.log(a)
    }
    );
  }

}
