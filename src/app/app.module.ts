import { routing } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ToastrModule } from 'ngx-toastr';
import { CookieModule } from 'ngx-cookie';

import { FormsModule } from '@angular/forms';
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { HomeComponent } from './home/home.component';
import { ForgotpwComponent } from './forgotpw/forgotpw.component';
import { PerfilComponent } from "./perfil/perfil.component";
import { BookingComponent } from './booking/booking.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, HomeComponent, ForgotpwComponent, PerfilComponent, BookingComponent, AdminComponent],
  imports: [FormsModule, BrowserModule,ToastrModule.forRoot(), CookieModule.withOptions(), routing],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}