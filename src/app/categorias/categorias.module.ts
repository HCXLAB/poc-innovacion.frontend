import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriaDetailComponent } from './pages/categorias/categoria-detail/categoria-detail.component';
import { CategoriaListComponent } from './pages/categorias/categoria-list/categoria-list.component';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    CategoriaListComponent,
    CategoriaDetailComponent,
    CategoriasRoutingModule
  ]
})
export class CategoriasModule { }
