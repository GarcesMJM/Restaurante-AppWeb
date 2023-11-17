import { Component } from "@angular/core";
import Swal from 'sweetalert2';
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

    axios.post( this.APIUrl+'reservar',
      {
        name :this.name,
        email : this.email,
        num :this.num,
        sede : this.sede,
        date :this.date,
        time : this.time,
      }
    )
    .then(
      (res) => {
          if(res && res.data){
            console.log(res.data);
            Swal.fire({
              title: res.data,
              html: `<i>A nombre de</i><br/><b>${this.name}</b>
                    <br/><b>Sede: </b> ${this.sede}
                    <br/><b>Fecha: </b> ${this.date}
                    <br/><b>Hora: </b> ${this.time}
                    <br/><b>Personas: </b> ${this.num}`,
              icon: "success"
            });
            this.name="";
            this.email="";
            this.num="";
            this.sede="";
            this.date="";
            this.time="";
          }else {
            console.log('¡Algo salió mal en el servidor!');
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "¡Algo salió mal en el servidor!"
            });
          }
      }
    )
    .catch((error) =>{
      Swal.fire({
        icon: "error",
        title: "Error al contactar con el servidor",
        text: error
      });
    });
  }
}
