import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaComponent } from './pagina/pagina.component';
import { OutroComponent } from './outro/outro.component';
import { InicioComponent } from './inicio/inicio.component';
import { MerendarComponent } from './merendar/merendar.component';
import { PropertyComponent } from './binding/property/property.component';
import { EventComponent } from './binding/event/event.component';
import { FormsModule } from '@angular/forms';
import { MaoDuplaComponent } from './binding/mao-dupla/mao-dupla.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ReceberDadosComponent } from './rotas/receber-dados/receber-dados.component';
import { EnviarComponent } from './rotas/enviar/enviar.component';

import { LoginComponent } from './login/login.component';
import { SegurancaService } from './seguranca.service';
import { DiretivasModule } from './diretivas/diretivas.module';
import { BindingModule } from './binding/binding.module';
import { RotasModule } from './rotas/rotas.module';
import { ConsumindoApiComponent } from './consumindo-api/consumindo-api.component';
import { ConsumindoApiSpringComponent } from './consumindo-api-spring/consumindo-api-spring.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaComponent,
    OutroComponent,
    InicioComponent,
    MerendarComponent,
    HeaderComponent,
    MenuComponent,
    LoginComponent,
    ConsumindoApiComponent,
    ConsumindoApiSpringComponent,
    CadastroAlunoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DiretivasModule,
    BindingModule,
    RotasModule,
    HttpClientModule,
  ],
  providers: [SegurancaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
