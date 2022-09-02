import { DiretivaForComponent } from './diretivas/diretiva-for/diretiva-for.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EnviarComponent } from './rotas/enviar/enviar.component';
import { EventComponent } from './binding/event/event.component';
import { InicioComponent } from './inicio/inicio.component';
import { MaoDuplaComponent } from './binding/mao-dupla/mao-dupla.component';
import { MerendarComponent } from './merendar/merendar.component';
import { OutroComponent } from './outro/outro.component';
import { PaginaComponent } from './pagina/pagina.component';
import { PropertyComponent } from './binding/property/property.component';
import { ReceberDadosComponent } from './rotas/receber-dados/receber-dados.component';
import { LoginComponent } from './login/login.component';
import { SegurancaService } from './seguranca.service';
import { DiretivaIfComponent } from './diretivas/diretiva-if/diretiva-if.component';

const routes: Routes = [
  { path: "pagina", component: PaginaComponent, canActivate:[SegurancaService] },
  { path: "", component: LoginComponent},
  { path: "inicio", component: InicioComponent, canActivate:[SegurancaService]},
  { path: "outro", component: OutroComponent, canActivate:[SegurancaService]},
  { path: "merendar", component: MerendarComponent, canActivate:[SegurancaService]},
  { path: "property", component: PropertyComponent, canActivate:[SegurancaService]},
  { path: "event", component: EventComponent, canActivate:[SegurancaService]},
  { path: "mao-dupla", component: MaoDuplaComponent, canActivate:[SegurancaService]},
  { path: "receber/:info1/:dado2/:teste", component: ReceberDadosComponent, canActivate:[SegurancaService]},
  { path: "enviar", component: EnviarComponent, canActivate:[SegurancaService]},
  { path: "diretiva-if", component: DiretivaIfComponent, canActivate:[SegurancaService]},
  { path: "diretiva-for/:lista", component: DiretivaForComponent, canActivate:[SegurancaService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
