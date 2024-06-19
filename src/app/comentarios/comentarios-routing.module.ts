import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComentarioDetailComponent } from './pages/comentarios/comentario-detail/comentario-detail.component';
import { ComentarioListComponent } from './pages/comentarios/comentario-list/comentario-list.component';

const routes: Routes = [
  { path: '', component: ComentarioListComponent },
  { path: ':id', component: ComentarioDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComentariosRoutingModule { }
