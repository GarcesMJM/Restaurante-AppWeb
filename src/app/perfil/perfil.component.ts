import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import axios from "axios";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  readonly APIUrl="http://localhost/";
  usuario=null;

  constructor(private cookieService: CookieService){}
  
  
  obtenerUsuario(){


    axios.post( this.APIUrl+'iniciarsesion',
      {
        token: this.cookieService.get('token');
      }
    )
    .then(
      (res) => {
          if(res && res.data){
            
          }else {
            
          }
      })
      .catch((error) =>{
        alert(error);
      });  
  }
}
