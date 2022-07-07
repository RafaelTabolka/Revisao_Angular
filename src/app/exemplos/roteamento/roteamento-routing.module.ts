import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgForComponent } from '../ng-for/ng-for.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:"full",
    component:NgForComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoteamentoRoutingModule { }
