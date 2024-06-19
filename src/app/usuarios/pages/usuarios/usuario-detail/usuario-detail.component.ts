import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-detail',
  standalone: true,
  imports: [],
  templateUrl: './usuario-detail.component.html',
  styleUrl: './usuario-detail.component.css'
})
export class UsuarioDetailComponent implements OnInit{

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Usuario ID:', id);  // Para verificar que el ID se recibe correctamente
  }
}
