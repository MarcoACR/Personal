import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuiensoyComponent } from './quiensoy/quiensoy.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

@NgModule({
  declarations: [		
    AppComponent,
      QuiensoyComponent,
      ProyectosComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
