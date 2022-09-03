import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-consumindo-api',
  templateUrl: './consumindo-api.component.html',
  styleUrls: ['./consumindo-api.component.css']
})
export class ConsumindoApiComponent implements OnInit {

  pokemon!: string;

  constructor(
    private service: PokemonService
  ) { }

  ngOnInit(): void {
  }

  buscar(): void {
    this.service.quemEhEssePokemon(this.pokemon)
      .pipe(
        catchError(
          (error) => {
            let lista = { nome: 'teste' }
            return of(lista)
          }
        )
      )
      .subscribe((Response) => {
        console.log("Resultado:", Response);

      })
  }

  types() {
    this.service.quaisOsTipos()
      .pipe(
        catchError((error) => {

          return of(['merendar', 'merendar2'])
        }
        )
      )
      .subscribe((Response) => {
        console.log("Resultado:", Response);

      })
  }

}
