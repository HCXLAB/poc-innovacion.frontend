import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IniciativasRoutingModule } from './iniciativas-routing.module';
import { IniciativaDetailComponent } from './pages/iniciativas/iniciativa-detail/iniciativa-detail.component';
import { IniciativaListComponent } from './pages/iniciativas/iniciativa-list/iniciativa-list.component';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    IniciativaListComponent,
    IniciativaDetailComponent,
    IniciativasRoutingModule
  ]
})
export class IniciativasModule { }
