import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesafiosRoutingModule } from './desafios-routing.module';
import { DesafioDetailComponent } from './pages/desafios/desafio-detail/desafio-detail.component';
import { DesafioListComponent } from './pages/desafios/desafio-list/desafio-list.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    DesafioListComponent,
    DesafioDetailComponent,
    DesafiosRoutingModule
  ]
})
export class DesafiosModule { }
