import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentariosRoutingModule } from './comentarios-routing.module';
import { ComentarioDetailComponent } from './pages/comentarios/comentario-detail/comentario-detail.component';
import { ComentarioListComponent } from './pages/comentarios/comentario-list/comentario-list.component';

@NgModule({
  declarations: [
 
  ],
  imports: [
    CommonModule,
    ComentarioListComponent,
    ComentarioDetailComponent,
    ComentariosRoutingModule
  ]
})
export class ComentariosModule { }
