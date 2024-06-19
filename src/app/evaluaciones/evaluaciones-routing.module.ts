import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvaluacionDetailComponent } from './pages/evaluaciones/evaluacion-detail/evaluacion-detail.component';
import { EvaluacionListComponent } from './pages/evaluaciones/evaluacion-list/evaluacion-list.component';


const routes: Routes = [
  { path: '', component: EvaluacionListComponent},
  { path: ':id', component: EvaluacionDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaluacionesRoutingModule { }
