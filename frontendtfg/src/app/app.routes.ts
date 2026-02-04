import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Login } from './login/login';
import { Register } from './register/register';
import { DashboardCliente } from './dashboard-cliente/dashboard-cliente';

export const routes: Routes = [
    {path: '' , component:Inicio},
    {path: 'registro' , component:Register},
    {path: 'login' , component:Login},
    {path: 'dashboard-cliente', component:DashboardCliente}

];
