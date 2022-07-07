import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'teste',
    loadChildren: () => import("./exemplos/roteamento/roteamento.module").then((m) => m.RoteamentoModule)
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'teste'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
