import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ForgotpwComponent } from "./forgotpw/forgotpw.component";
import { PerfilComponent } from "./perfil/perfil.component";

const appRoutes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgotpw', component: ForgotpwComponent},
  {path: 'perfil', component:PerfilComponent},
];

export const routing = RouterModule.forRoot(appRoutes);
