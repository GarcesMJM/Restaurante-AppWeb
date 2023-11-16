import { Component } from "@angular/core";
import axios from "axios";

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
    var confpasswd = (<HTMLInputElement>document.getElementById("confpassword")).value;

    if (!user || !passwd || !confpasswd) {
      alert('Por favor ingrese todos los campos.');
      return;
    }

    if (passwd !== confpasswd) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    axios.post( this.APIUrl+'register',
      {
        username : user,
        password : passwd,
      }
    )
    .then(
      (res) => {
         alert(res);
      })
      .catch((error) =>{
        alert(error);
      });
  }

}