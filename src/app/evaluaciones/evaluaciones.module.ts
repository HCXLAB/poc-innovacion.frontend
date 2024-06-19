import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvaluacionesRoutingModule } from './evaluaciones-routing.module';
import { EvaluacionDetailComponent } from './pages/evaluaciones/evaluacion-detail/evaluacion-detail.component';
import { EvaluacionListComponent } from './pages/evaluaciones/evaluacion-list/evaluacion-list.component';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    EvaluacionListComponent,
    EvaluacionDetailComponent,
    EvaluacionesRoutingModule
  ]
})
export class EvaluacionesModule { }
