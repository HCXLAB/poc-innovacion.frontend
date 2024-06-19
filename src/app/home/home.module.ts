import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { CategoriesComponent } from './pages/categories/categories.component';
import { InitiativesComponent } from './pages/initiatives/initiatives.component';
import { LatestPublicationsComponent } from './pages/latest-publications/latest-publications.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list'
import { NavbarComponent } from '../shared/pages/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule,
    HomeComponent,
    CategoriesComponent,
    LatestPublicationsComponent,
    InitiativesComponent,
    NavbarComponent
  ]
})
export class HomeModule { }
