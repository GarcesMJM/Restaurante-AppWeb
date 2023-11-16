import { Component } from "@angular/core";
import {Router} from "@angular/router";
import { CookieService } from 'ngx-cookie';
import { ToastrService } from 'ngx-toastr'
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

  constructor(private router: Router,  private toastr: ToastrService,private cookieService: CookieService,) {}

  login() {
    if (!this.username || !this.password) {
      alert('Por favor ingrese todos los campos.');
      return;
    }

    axios.post( this.APIUrl+'iniciarsesion',
      {
        username :this.username,
        password : this.password,
      }
    )
    .then(
      (res) => {
          if(res && res.data){
            this.toastr.success('¡Operación exitosa!', 'Éxito')
            this.cookieService.put('token', res.data);
            this.router.navigate(['/perfil']);
          }else {
            this.toastr.success('¡Operación exitosa!', 'Denegado')
          }
      })
      .catch((error) =>{
        alert(error);
      });    
  }
}