import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Dados } from '../interface/dados';
import { DadosService } from '../services/dados.service';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  nome:string = 'Lucas'

  dados:Array<Dados> = [
    {id:1, nome:"Lucas", idade:20, estadoCivil:"solteiro",cargo:"Desempregado"},
    {id:2, nome:"Bruno", idade:25, estadoCivil:"casado",cargo:""},
    {id:3, nome:"Manuela", idade:22, estadoCivil:"solteira",cargo:""},
    {id:4, nome:"Fernanda", idade:23, estadoCivil:"solteira",cargo:""},
    {id:5, nome:"Daniel", idade:30, estadoCivil:"solteiro",cargo:""},
    {id:6, nome:"Rafael", idade:23, estadoCivil:"solteiro",cargo:""},  
  ]

  constructor(private dadosService: DadosService) { }

  ngOnInit(): void {
  }

  remove(dado:Dados){
    this.dados = this.dados.filter(function(x){
    return x.nome !== dado.nome
    }) 
  }



}