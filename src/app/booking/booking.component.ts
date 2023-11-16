import { Component } from "@angular/core";
import {Router} from "@angular/router";
import { CookieService } from 'ngx-cookie';
import { ToastrService } from 'ngx-toastr'
import axios from "axios";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  name: string="";
  email: string="";
  num: string="";
  sede: string="";
  date: string="";
  time: string="";
  readonly APIUrl="http://localhost/";

  constructor(private router: Router,  private toastr: ToastrService,private cookieService: CookieService,) {}

  book() {
    if (!this.name || !this.email || !this.num || !this.sede || !this.date || !this.time) {
      alert('Por favor ingrese todos los campos.');
      return;
    }
    console.log(this.name);
    console.log(this.email);
    console.log(this.num);
    console.log(this.sede);
    console.log(this.date);
    console.log(this.time);

    // axios.post( this.APIUrl+'reservar',
    //   {
    //     name :this.name,
    //     email : this.email,
    //     num :this.num,
    //     sede : this.sede,
    //     date :this.date,
    //     time : this.time,
    //   }
    // )
    // .then(
    //   (res) => {
    //       if(res && res.data){
    //         this.toastr.success('¡Operación exitosa!', 'Éxito')
    //         this.router.navigate(['/perfil']);
    //       }else {
    //         this.toastr.success('¡Operación exitosa!', 'Denegado')
    //       }
    //   })
    //   .catch((error) =>{
    //     alert(error);
    //   }
    // );   
  }
}
