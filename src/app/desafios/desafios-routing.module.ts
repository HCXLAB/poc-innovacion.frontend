import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesafioDetailComponent } from './pages/desafios/desafio-detail/desafio-detail.component';
import { DesafioListComponent } from './pages/desafios/desafio-list/desafio-list.component';

const routes: Routes = [
  { path: '', component: DesafioListComponent },
  { path: ':id', component: DesafioDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesafiosRoutingModule { }
