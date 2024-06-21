import { Routes } from '@angular/router';
import { PublicacionesComponent } from './pages/publicaciones/publicaciones.component';
import { PublicacionComponent } from './pages/publicacion/publicacion.component';

export default [
    {
        path: '',
        component: PublicacionesComponent
    },
    {
        path     : ':id',
        component: PublicacionComponent,
    },
] as Routes;
