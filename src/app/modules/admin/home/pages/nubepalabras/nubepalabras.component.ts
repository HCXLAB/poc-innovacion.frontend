import { Component } from '@angular/core';
import { CloudData, CloudOptions, TagCloudComponent } from 'angular-tag-cloud-module';

@Component({
  selector: 'app-nubepalabras',
  standalone: true,
  imports: [
    TagCloudComponent
  ],
  templateUrl: './nubepalabras.component.html',
  styleUrl: './nubepalabras.component.scss'
})
export class NubepalabrasComponent {

  options: CloudOptions = {
    // if width is between 0 and 1 it will be set to the width of the upper element multiplied by the value
    width: 1000,
    // if height is between 0 and 1 it will be set to the height of the upper element multiplied by the value
    height: 400,
    overflow: false,
  };

  data: CloudData[] = [
    {text: 'Chatbot con IA para autoatención en RRHH', weight: 10, link: 'https://google.com', color: '#ffaaee'},
    {text: 'Plataforma de apredizaje IA', weight: 1, link: 'https://google.com' ,color: '#ffaaee'},
    {text: 'Sistema de gestión de energía inteligente', weight: 4, link: 'https://google.com' ,color: '#ffaaee'},
    // ...
  ];
}
