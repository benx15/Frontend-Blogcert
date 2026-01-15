import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Login } from './login/login';
import { Register } from './register/register';

export const routes: Routes = [
    {path: '' , component:Inicio},
    {path: 'registro' , component:Register},
    {path: 'login' , component:Login},

];
