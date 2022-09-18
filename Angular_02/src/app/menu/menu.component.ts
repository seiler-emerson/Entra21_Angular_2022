import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  links!: Array<any>;

  constructor( ) {  }

  ngOnInit(): void {
    this.links = new Array();
    this.links.push(
      {
        rota: 'pagina',
        textContent: 'Página',
        cor: 'nav-icon far fa-circle text-success'
      }
    )
    this.links.push(
      {
        rota: 'outro',
        textContent: 'Outro',
        cor: 'nav-icon far fa-circle text-danger'
      }
    )
    this.links.push(
      {
        rota: 'property',
        textContent: 'Property',
        cor: 'nav-icon far fa-circle text-primary'
      }
    )
    this.links.push(
      {
        rota: 'event',
        textContent: 'Event',
        cor: 'nav-icon far fa-circle text-warning'
      }
    )
    this.links.push(
      {
        rota: 'mao-dupla',
        textContent: 'Mão Dupla',
        cor: 'nav-icon far fa-circle text-success'
      }
    )
    this.links.push(
      {
        rota: ['/receber', 'Emerson', 27, 'Navegantes'],
        textContent: 'Receber',
        cor: 'nav-icon far fa-circle text-warning'
      }
    )
    this.links.push(
      {
        rota: 'enviar',
        textContent: 'Enviar',
        cor: 'nav-icon far fa-circle text-danger',
        hexa: "text-warning"
      }
    )
    this.links.push(
      {
        rota: 'diretiva-if',
        textContent: 'Diretiva If',
        cor: 'nav-icon far fa-circle text-primary'
      }
    )
    this.links.push(
      {
        rota: 'diretiva-for',
        textContent: 'Diretiva For',
        cor: 'nav-icon far fa-circle text-success'
      }
    )
    this.links.push(
      {
        rota: 'consumindo-api',
        textContent: 'Consumindo Api',
        cor: 'nav-icon far fa-circle text-success'
      }
    )
    this.links.push(
      {
        rota: 'consumindo-api-spring',
        textContent: 'Api Spring',
        cor: 'nav-icon far fa-circle text-warning'
      }
    )
    this.links.push(
      {
        rota: 'cadastr-aluno',
        textContent: 'Cadastro Aluno',
        cor: 'nav-icon far fa-circle text-warning'
      }
    )
   }
}
