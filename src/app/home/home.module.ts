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

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CategoriesComponent,
    LatestPublicationsComponent,
    InitiativesComponent,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule,
  ]
})
export class HomeModule { }
