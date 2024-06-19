import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdjuntoDetailComponent } from './pages/adjuntos/adjunto-detail/adjunto-detail.component';
import { AdjuntoListComponent } from './pages/adjuntos/adjunto-list/adjunto-list.component';

const routes: Routes = [
  { path: '', component: AdjuntoListComponent },
  { path: ':id', component: AdjuntoDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdjuntosRoutingModule { }
