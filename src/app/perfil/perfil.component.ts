import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { CookieService } from 'ngx-cookie';
import Swal from 'sweetalert2';
import axios from "axios";
import { MostrarModalService } from '../services/mostrar-modal.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  readonly APIUrl="http://localhost/";
  usuario : any = {};
  reservas: any =[];
  mostrarModal: boolean=false;  

 

  constructor(private modalSS:MostrarModalService, private router: Router, private cookieService: CookieService){}
  
  ngOnInit(): void {
    this.obtenerUsuario();
    this.modalSS.$modalReservas.subscribe((valor)=>(this.mostrarModal = valor));
  } 
  
  abrirModal(): void {
    this.obtenerReservas();
    this.mostrarModal = true;
  }
  
  obtenerUsuario():void{

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
            Swal.fire({
              icon: "error",
              text: res.data,
              title: "Sesión cerrada",
              showConfirmButton: false,
              timer: 1500
            });       
          }
      })
      .catch((error) =>{
        Swal.fire({
          icon: "error",
          text: error,
          title: "Sesión cerrada",
          showConfirmButton: false,
          timer: 1500
        });  
      });  
  }

  cerrarSesion():void{
    try {
      this.cookieService.remove('token');
      Swal.fire({
        icon: "success",
        title: "Sesión cerrada",
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigate(['/']);
    } catch (error) {
      console.log(error);
    }
  }

  obtenerReservas():void{
    axios.post( this.APIUrl+'obtenerreservas',
      {
        username: this.usuario.username,
      }
    )
    .then(
      (res) => {
          if(res && res.data){
            this.reservas=res.data;
          }else {
            Swal.fire({
              icon: "error",
              text: res.data,
              title: "Sesión cerrada",
              showConfirmButton: false,
              timer: 1500
            });  
          }
      })
      .catch((error) =>{
        Swal.fire({
          icon: "error",
          text: error,
          title: "Sesión cerrada",
          showConfirmButton: false,
          timer: 1500
        });  
      });  
  }

  irbooking():void{
    try {
      this.router.navigate(['/booking', this.usuario.username]);
    } catch (error) {
      console.log(error)
    }
  }
}
