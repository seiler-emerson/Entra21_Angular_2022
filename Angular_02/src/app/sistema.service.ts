import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SistemaService {

  sistemaURL: string = "http://localhost:8080/sistemas"

  constructor(
    private http: HttpClient
    ) { }

  login(credenciais: any): Observable<any> {

    return this.http.post<any>(this.sistemaURL + "/login", credenciais)
  }

  register(credenciais: any): Observable<any> {

    return this.http.post<any>(this.sistemaURL + "/register", credenciais)
  }

}
