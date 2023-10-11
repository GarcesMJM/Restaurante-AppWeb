import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subscriber } from "rxjs";
import axios from "axios";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent {
  username: string='';
  password: string='';
  confirmPassword: string='';
  readonly APIUrl="http://localhost/";


  constructor() {}
  

  register() {
    var user = (<HTMLInputElement>document.getElementById("username")).value;
    var passwd = (<HTMLInputElement>document.getElementById("password")).value;
    //var confpasswd = (<HTMLInputElement>document.getElementById("confpassword")).value;

    axios.post( this.APIUrl+'create',
      {
        username : user,
        password : passwd,
        //confpassword : confpasswd
      }
    )
    .then(
      (res) => {
         alert(res);
      },
      (error) => {
        alert(String(error));
      });
  }

}