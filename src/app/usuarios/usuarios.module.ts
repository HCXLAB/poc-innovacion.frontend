import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuarioDetailComponent } from './pages/usuarios/usuario-detail/usuario-detail.component';
import { UsuarioListComponent } from './pages/usuarios/usuario-list/usuario-list.component';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    UsuarioListComponent,
    UsuarioDetailComponent,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
