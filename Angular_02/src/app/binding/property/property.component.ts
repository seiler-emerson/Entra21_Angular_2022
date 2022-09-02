import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  // Properties

  nome: string = "agora eu entedi"
  sobrenome!: string
  idade: number = 27
  cpf: string = "123.123.123-23"
  email: string = "teste@teste.com"
  possuiCarro: boolean = false
  enderecoImagem: string = "https://www.alura.com.br/artigos/assets/como-comecar-com-angular/como-comecar-com-angular.png"
  padrao: string = "500"
  url: string ="https://www.google.com"
  alvo: string = "_blank"
  tabela: string = "table table-bordered table-striped"



  constructor() { }

  ngOnInit(): void {

  }



}
