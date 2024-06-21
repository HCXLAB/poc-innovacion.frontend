import { Component } from '@angular/core';
import { CategoriasComponent } from '../categorias/categorias.component';
import { PublicacionesComponent } from "../publicaciones/publicaciones.component";
import { NubepalabrasComponent } from "../nubepalabras/nubepalabras.component";
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [CategoriasComponent, PublicacionesComponent, NubepalabrasComponent]
})
export class HomeComponent {
   
}
