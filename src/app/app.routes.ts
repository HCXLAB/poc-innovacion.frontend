import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'usuarios', loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule) },
  { path: 'desafios', loadChildren: () => import('./desafios/desafios.module').then(m => m.DesafiosModule) },
  { path: 'iniciativas', loadChildren: () => import('./iniciativas/iniciativas.module').then(m => m.IniciativasModule) },
  { path: 'evaluaciones', loadChildren: () => import('./evaluaciones/evaluaciones.module').then(m => m.EvaluacionesModule) },
  { path: 'categorias', loadChildren: () => import('./categorias/categorias.module').then(m => m.CategoriasModule) },
  { path: 'comentarios', loadChildren: () => import('./comentarios/comentarios.module').then(m => m.ComentariosModule) },
  { path: 'adjuntos', loadChildren: () => import('./adjuntos/adjuntos.module').then(m => m.AdjuntosModule) },
  { path: '', redirectTo: '/usuarios', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
