import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  resultado!: number
  tamanho:number = 100

  constructor() { }

  ngOnInit(): void {
  }

  minhaFunc() {
    alert("Cade o pai do Filipe?")
  }

  somar() {
    let a:number = Number(prompt("Informe o primeiro numero"))
    let b:number = Number(prompt("Informe o segundo numero"))
    this.resultado = a+b
    alert(`${a}+${b}=${this.resultado}`)
  }

  subtrair() {
    let a:number = Number(prompt("Informe o primeiro numero"))
    let b:number = Number(prompt("Informe o segundo numero"))
    this.resultado = a-b
    alert(`${a}-${b}=${this.resultado}`)
  }
  
  multiplicar() {
    let a:number = Number(prompt("Informe o primeiro numero"))
    let b:number = Number(prompt("Informe o segundo numero"))
    this.resultado = a*b
    alert(`${a}*${b}=${this.resultado}`)
  }

  dividir() {
    let a:number = Number(prompt("Informe o primeiro numero"))
    let b:number = Number(prompt("Informe o segundo numero"))
    this.resultado = a/b
    alert(`${a}/${b}=${this.resultado}`)
  }

  aumentar() {
    this.tamanho +=10
  }

  diminuir() {
    this.tamanho -=5
  }
}
