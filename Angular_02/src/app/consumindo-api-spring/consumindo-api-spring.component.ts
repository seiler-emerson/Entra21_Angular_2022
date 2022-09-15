import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { SistemaService } from '../sistema.service';

@Component({
  selector: 'app-consumindo-api-spring',
  templateUrl: './consumindo-api-spring.component.html',
  styleUrls: ['./consumindo-api-spring.component.css']
})
export class ConsumindoApiSpringComponent implements OnInit {

  email!: string;
  senha!: string;

  constructor(
    private sistemaService: SistemaService
  ) { }

  ngOnInit(): void {
  }

  login(): void {
    this.sistemaService
      .login(this.getDados())
      .pipe(
        catchError((error) => {
          return of(error);
        })
      )
      .subscribe((response: any) => {
        console.log(response);
      });
  }



  register(): void {
    this.sistemaService
      .register(this.getDados())
      .pipe(
        catchError((error) => {
          return of(error);
        })
      )
      .subscribe((response: any) => {
        console.log(response);
      });
  }



  getDados(): any {

    return {
      email: this.email,
      senha: this.senha,
    };
  }

}
