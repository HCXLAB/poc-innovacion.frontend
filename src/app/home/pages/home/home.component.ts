import { Component } from '@angular/core';
import { CategoriesComponent } from "../categories/categories.component";
import { LatestPublicationsComponent } from "../latest-publications/latest-publications.component";
import { InitiativesComponent } from "../initiatives/initiatives.component";
import { MatToolbar } from '@angular/material/toolbar';
import { CloudData, CloudOptions, TagCloudComponent } from 'angular-tag-cloud-module';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [
        LatestPublicationsComponent,
        InitiativesComponent,
        CategoriesComponent,
        TagCloudComponent,
    ]
})
export class HomeComponent {

    options: CloudOptions = {
        // if width is between 0 and 1 it will be set to the width of the upper element multiplied by the value
        width: 1000,
        // if height is between 0 and 1 it will be set to the height of the upper element multiplied by the value
        height: 400,
        overflow: false,
    };

    data: CloudData[] = [
        { text: 'Weight-1-link', weight: 1, link: 'https://google.com', color: '#FFB3BA' },  // Light Red
        { text: 'Weight-2-link', weight: 2, link: 'https://google.com', color: '#FFDFBA' },  // Light Orange
        { text: 'Weight-3-link', weight: 3, link: 'https://google.com', color: '#FFFFBA' },  // Light Yellow
        { text: 'Weight-4-link', weight: 4, link: 'https://google.com', color: '#BAFFC9' },  // Light Green
        { text: 'Weight-5-link', weight: 5, link: 'https://google.com', color: '#BAE1FF' },  // Light Blue
        { text: 'Weight-6-link', weight: 6, link: 'https://google.com', color: '#B3B3FF' },  // Light Purple
        { text: 'Weight-7-link', weight: 7, link: 'https://google.com', color: '#DABFFF' },  // Light Violet
        { text: 'Weight-8-link-color', weight: 8, link: 'https://google.com', color: '#FFB3E1' },  // Light Pink
        { text: 'Weight-9-link', weight: 9, link: 'https://google.com', color: '#FFB3B3' },  // Coral
        { text: 'Weight-10-link', weight: 10, link: 'https://google.com', color: '#FF0000' }  // Red
    ];



}
