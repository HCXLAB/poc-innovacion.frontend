import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciativaDetailComponent } from './pages/iniciativas/iniciativa-detail/iniciativa-detail.component';
import { IniciativaListComponent } from './pages/iniciativas/iniciativa-list/iniciativa-list.component';


const routes: Routes = [
  { path: '', component: IniciativaListComponent },
  { path: ':id', component: IniciativaDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IniciativasRoutingModule { }
