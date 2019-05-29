import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule, routing } from './app-routing.module';
import { PerfilComponent } from './perfil/perfil.component';
import { PaginaInicialRoutingModule } from './pagina-inicial/pagina-inicial-routing.module';
import { PerfilRoutingModule } from './perfil/perfil-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    PerfilComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PaginaInicialRoutingModule,
    PerfilRoutingModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
