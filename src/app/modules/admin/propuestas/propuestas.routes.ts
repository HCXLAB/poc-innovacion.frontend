import { Routes } from '@angular/router';
import { PropuestaComponent } from './pages/propuesta/propuesta.component';
import { PropuestasComponent } from './pages/propuestas/propuestas.component';


export default [
    {
        path: ':id',
        component: PropuestaComponent
    },
    {
        path     : '',
        component: PropuestasComponent,
    },
] as Routes;
