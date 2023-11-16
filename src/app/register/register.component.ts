import { Component } from "@angular/core";
import {Router} from "@angular/router"
import axios from "axios";
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
}
)
export class RegisterComponent {
  username: string='';
  password: string='';
  confirmPassword: string='';
  readonly APIUrl="http://localhost/";


  constructor(private router: Router, private toastr: ToastrService) {}
  

  register() {
      if (!this.username || !this.password || !this.confirmPassword) {
      alert('Por favor ingrese todos los campos.');
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    axios.post( this.APIUrl+'register',
      {
        username : this.username,
        password : this.password,
      }
    )
    .then(
      (res) => {
         if(res.data == true){
          this.toastr.success('¡Operación exitosa!', 'Éxito')
          this.router.navigate(['/login'])
         }
      })
      .catch((error) =>{
        alert(error);
      });
  }

}