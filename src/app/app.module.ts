import { routing } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { HomeComponent } from './home/home.component';
import { ForgotpwComponent } from './forgotpw/forgotpw.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, HomeComponent, ForgotpwComponent],
  imports: [FormsModule, HttpClientModule, BrowserModule, routing],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}