import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { CookieService } from 'ngx-cookie';
import Swal from 'sweetalert2';
import axios from "axios";
import { MostrarModalService } from '../services/mostrar-modal.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  readonly APIUrl="http://localhost/";
  usuario : any = {};
  reservas: any =[];
  usuarios: any=[];
  mostrarReservas: boolean=false;
  mostrarUsuarios: boolean=false; 

  constructor(private modalSS:MostrarModalService, private router: Router, private cookieService: CookieService){}

  ngOnInit(): void {
    this.obtenerUsuario();
    this.modalSS.$modalReservas.subscribe((valor)=>(this.mostrarReservas = valor));
    this.modalSS.$modalUsuarios.subscribe((valor)=>(this.mostrarUsuarios = valor));
  } 

  abrirReservas(): void {
    this.obtenerReservas();
    this.mostrarReservas = true;
  }

  abrirUsuarios(): void {
    this.obtenerUsuarios();
    this.mostrarUsuarios = true;
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

  obtenerUsuarios():void{
    axios.post( this.APIUrl+'obtenerusuarios', {
      username: this.usuario.username,
    })
    .then(
      (res) => {
          if(res && res.data){
            this.usuarios=res.data;
          }else {
            Swal.fire({
              icon: "error",
              text: res.data,
              title: "Opss",
              showConfirmButton: false,
              timer: 1500
            });       
          }
      })
      .catch((error) =>{
        Swal.fire({
          icon: "error",
          text: error,
          title: "Opss...",
          showConfirmButton: false,
          timer: 1500
        });  
      });  
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

}
