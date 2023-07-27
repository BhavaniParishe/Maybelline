import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  img1="https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/about-us/maybelline_about-us_gigi_banner_1440x540_r2.jpg?rev=34124dea25ae4ab79217e065cf3ff8dc&cx=0.46&cy=0.5&cw=1440&ch=540&hash=A6A6918B59118121CC94A4FA11BD5837";
  username:any;
  password:any;
  user:any;
  constructor (private route:Router){}
    dologin(){
      if(this.password=="12345"){
        this.user={
          "username":this.username,
          "password":this.password

        }
        localStorage.setItem('loggedin',JSON.stringify(this.user))
        this.route.navigateByUrl('/user/shop')

      }
    }
    register(){
      alert("Succesful")
    }
  }
