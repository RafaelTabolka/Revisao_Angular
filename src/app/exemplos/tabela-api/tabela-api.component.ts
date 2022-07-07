import { Component, OnInit } from '@angular/core';
import { Dados } from '../interface/dados';
import { DadosService } from '../services/dados.service';

@Component({
  selector: 'app-tabela-api',
  templateUrl: './tabela-api.component.html',
  styleUrls: ['./tabela-api.component.css']
})
export class TabelaApiComponent implements OnInit {

  dados:Dados[] = []

  colunas:Array<string> = ["id", "nome", "idade", "estadoCivil", "cargo", "excluir"]

  constructor(private dadosService: DadosService) { }

  ngOnInit(): void {
    
    this.dadosService.mostrarTodosOsDados().subscribe(
      (novosValores) => {
        this.dados = novosValores
      }
    )

  }

}
