import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioDetailComponent } from './pages/usuarios/usuario-detail/usuario-detail.component';
import { UsuarioListComponent } from './pages/usuarios/usuario-list/usuario-list.component';

const routes: Routes = [
  { path: '', component: UsuarioListComponent },
  { path: ':id', component: UsuarioDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
