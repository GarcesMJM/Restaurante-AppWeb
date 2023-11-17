import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import axios from "axios";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  readonly APIUrl="http://localhost/";
  usuario : any = {};

  constructor(private cookieService: CookieService){}
  
  ngOnInit(): void {
    this.obtenerUsuario();
  }
  
  
  obtenerUsuario(){

    axios.post( this.APIUrl+'obtenerusuario',
      {
        token: this.cookieService.get('token')
      }
    )
    .then(
      (res) => {
          if(res && res.data){
            this.usuario=res.data;
          }else {
            
          }
      })
      .catch((error) =>{
        alert(error);
      });  
  }
}
