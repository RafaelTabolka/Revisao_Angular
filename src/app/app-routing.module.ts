import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'ngfor',
    loadChildren: () => import("./exemplos/roteamento/roteamento.module").then((m) => m.RoteamentoModule)
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'ngfor'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
