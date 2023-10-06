import { routing } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatDialogModule } from '@angular/material/dialog';

import { FormsModule } from '@angular/forms';
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, HomeComponent],
  imports: [FormsModule, MatDialogModule,  BrowserModule, routing],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}