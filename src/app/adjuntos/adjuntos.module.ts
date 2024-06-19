import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdjuntosRoutingModule } from './adjuntos-routing.module';
import { AdjuntoDetailComponent } from './pages/adjuntos/adjunto-detail/adjunto-detail.component';
import { AdjuntoListComponent } from './pages/adjuntos/adjunto-list/adjunto-list.component';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    AdjuntoListComponent,
    AdjuntoDetailComponent,
    AdjuntosRoutingModule
  ]
})
export class AdjuntosModule { }
