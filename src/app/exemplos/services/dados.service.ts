import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dados } from '../interface/dados';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  private readonly url = 'http://localhost:3000/dadosApi' 

  constructor(private http: HttpClient) { }

  mostrarTodosOsDados():Observable<Dados[]> {
   return this.http.get<Dados[]>(this.url)
  }

  mostrarDadoPeloId(id:number):Observable<Dados> {
    return this.http.get<Dados>(`${this.url}/${id}`)
  }


}
