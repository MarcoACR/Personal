import { ProyectosComponent } from './proyectos/proyectos.component';
import { QuiensoyComponent } from './quiensoy/quiensoy.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: QuiensoyComponent},
  {path: 'Proyectos', component: ProyectosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
