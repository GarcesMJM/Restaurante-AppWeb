import { Component } from "@angular/core";
import axios from "axios";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  username: string="";
  password: string="";
  readonly APIUrl="http://localhost/";

  constructor() {}

  login() {
    var user = (<HTMLInputElement>document.getElementById("username")).value;
    var passwd = (<HTMLInputElement>document.getElementById("password")).value;

    if (!user || !passwd) {
      alert('Por favor ingrese todos los campos.');
      return;
    }

    axios.post( this.APIUrl+'iniciarsesion',
      {
        username : user,
        password : passwd,
      }
    )
    .then(
      (res) => {
         alert(res.data);
         console.log(res)
         
      })
      .catch((error) =>{
        alert(error);
      });
    
    
  }
}