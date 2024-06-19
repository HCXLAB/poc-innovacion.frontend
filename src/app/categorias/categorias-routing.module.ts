import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaDetailComponent } from './pages/categorias/categoria-detail/categoria-detail.component';
import { CategoriaListComponent } from './pages/categorias/categoria-list/categoria-list.component';

const routes: Routes = [
  { path: '', component: CategoriaListComponent },
  { path: ':id', component: CategoriaDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
