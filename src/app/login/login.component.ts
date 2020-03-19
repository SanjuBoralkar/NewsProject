import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName : string = "";
  password : string = "";

  constructor(private route : Router) { }

  ngOnInit() {
  }
  signIn(){
  
    if (this.userName === "sanjay" && this.password === "sanjay") {
    this.route.navigate(["/pages/dashboard"]);

      
    }
  }
}
