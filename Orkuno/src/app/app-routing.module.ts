import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { LoginComponent } from './login/login.component';
import { AvaliacaoPageComponent } from './avaliacao-page/avaliacao-page.component';
import { AvaliacaoOKComponent } from './avaliacao-ok/avaliacao-ok.component';

const routes: Routes = [
  { path: 'paginaInicial', component: PaginaInicialComponent},
  { path: 'perfil', component: PerfilComponent},
  { path: 'login', component: LoginComponent},
  { path: 'avaliacaoPage', component: AvaliacaoPageComponent},
  { path: 'avaliacaoPageOk', component: AvaliacaoOKComponent},
  { path: '', component: LoginComponent}



];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [ RouterModule.forRoot(routes), CommonModule ],
  declarations: []
})



export class AppRoutingModule { }

