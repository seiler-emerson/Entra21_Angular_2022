import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { MerendarComponent } from './merendar/merendar.component';
import { OutroComponent } from './outro/outro.component';
import { PaginaComponent } from './pagina/pagina.component';

const routes: Routes = [
  { path: "vaiPagina", component: PaginaComponent },
  { path: "", component: InicioComponent},
  { path: "outro", component: OutroComponent},
  { path: "merendar", component: MerendarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
