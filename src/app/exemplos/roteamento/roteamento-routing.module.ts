import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgForComponent } from '../ng-for/ng-for.component';
import { TabelaApiComponent } from '../tabela-api/tabela-api.component';

const routes: Routes = [
  {
    path:'ngFor',
    pathMatch:"full",
    component:NgForComponent
  },
  {
    path:'tabelaApi',
    pathMatch:'full',
    component:TabelaApiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoteamentoRoutingModule { }
