import { CdkScrollable } from '@angular/cdk/scrolling';
import { I18nPluralPipe, NgClass, PercentPipe } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import {
    MatSlideToggleChange,
    MatSlideToggleModule,
} from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FuseFindByKeyPipe } from '@fuse/pipes/find-by-key';
import { Categoria } from 'app/modules/admin/home/models/home';
import { Subject } from 'rxjs';
import { Idea } from '../../models/publicaciones';

@Component({
    selector: 'app-publicaciones',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        CdkScrollable,
        MatFormFieldModule,
        MatSelectModule,
        MatOptionModule,
        MatIconModule,
        MatInputModule,
        MatSlideToggleModule,
        NgClass,
        MatTooltipModule,
        MatProgressBarModule,
        MatButtonModule,
        RouterLink,
        FuseFindByKeyPipe,
        PercentPipe,
        I18nPluralPipe,
    ],
    templateUrl: './publicaciones.component.html',
    styleUrl: './publicaciones.component.scss',
})
export class PublicacionesComponent {
    filteredCourses: Idea[] = [];

    categories: Categoria[] = [];

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _changeDetectorRef: ChangeDetectorRef,
        private _router: Router
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */

    ngOnInit(): void {
        const categorias: Categoria[] = [
            {
                id: '694e4e5f-f25f-470b-bd0e-26b1d4f64028',
                slug: 'IA',
                title: 'Inteligencia Artificial',
            },
            {
                id: '694e4e5f-f25f-470b-bd0e-26b1d4f64029',
                slug: 'Web',
                title: 'Web',
            },
            {
                id: '694e4e5f-f25f-470b-bd0e-26b1d4f64026',
                slug: 'Accesos',
                title: 'Accesos',
            },
        ];

        const desafios: Idea[] = [
            {
                id: '694e4e5f-f25f-470b-bd0e-26b1d4f640',
                title: 'Chatbot con IA para autoatención en RRHH',
                slug: 'basics-of-angular',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ornare lectus sit amet est placerat in egestas erat. Non nisi est sit amet facilisis magna etiam. Faucibus interdum posuere lorem ipsum dolor. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Adipiscing vitae proin sagittis nisl rhoncus. Tincidunt eget nullam non nisi est sit amet facilisis magna. Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Cursus risus at ultrices mi tempus imperdiet nulla. Tortor vitae purus faucibus ornare suspendisse sed. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Fermentum iaculis eu non diam phasellus vestibulum. Aliquet nec ullamcorper sit amet risus nullam eget felis. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Magnis dis parturient montes nascetur ridiculus mus mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit.',
                category: 'IA',
                date: new Date(Date.now()),
                totalSteps: 11,
                updatedAt: 1718930082,
                featured: true,
                progress: {
                    currentStep: 1,
                    completed: 1,
                },
            },
            {
                id: '694e4e5f-f25f-470b-bd0e-26b1d4f6408',
                title: 'Implementación de un sistema gestor de innovación e ideas',
                slug: 'basics-of-angular',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ornare lectus sit amet est placerat in egestas erat. Non nisi est sit amet facilisis magna etiam. Faucibus interdum posuere lorem ipsum dolor. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Adipiscing vitae proin sagittis nisl rhoncus. Tincidunt eget nullam non nisi est sit amet facilisis magna. Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Cursus risus at ultrices mi tempus imperdiet nulla. Tortor vitae purus faucibus ornare suspendisse sed. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Fermentum iaculis eu non diam phasellus vestibulum. Aliquet nec ullamcorper sit amet risus nullam eget felis. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Magnis dis parturient montes nascetur ridiculus mus mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit.',
                category: 'Web',
                date: new Date(Date.now()),
                totalSteps: 11,
                updatedAt: 1718930082,
                featured: true,
                progress: {
                    currentStep: 1,
                    completed: 1,
                },
            },
            {
                id: '694e4e5f-f25f-470b-bd0e-261d4f64028',
                title: 'Credencial virtual para poder entrar al edificio',
                slug: 'firebase',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ornare lectus sit amet est placerat in egestas erat. Non nisi est sit amet facilisis magna etiam. Faucibus interdum posuere lorem ipsum dolor. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Adipiscing vitae proin sagittis nisl rhoncus. Tincidunt eget nullam non nisi est sit amet facilisis magna. Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Cursus risus at ultrices mi tempus imperdiet nulla. Tortor vitae purus faucibus ornare suspendisse sed. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Fermentum iaculis eu non diam phasellus vestibulum. Aliquet nec ullamcorper sit amet risus nullam eget felis. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Magnis dis parturient montes nascetur ridiculus mus mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit.',
                category: 'Accesos',
                date: new Date(Date.now()),
                totalSteps: 11,
                updatedAt: 1718930082,
                featured: true,
                progress: {
                    currentStep: 1,
                    completed: 1,
                },
            },
            {
                id: '694e4e5f-f25f-470b-bd0e-26b1d4f6028',
                title: 'Plataforma de aprendizaje personalizada con inteligencia artificial',
                slug: 'basics-of-angular',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ornare lectus sit amet est placerat in egestas erat. Non nisi est sit amet facilisis magna etiam. Faucibus interdum posuere lorem ipsum dolor. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Adipiscing vitae proin sagittis nisl rhoncus. Tincidunt eget nullam non nisi est sit amet facilisis magna. Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Cursus risus at ultrices mi tempus imperdiet nulla. Tortor vitae purus faucibus ornare suspendisse sed. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Fermentum iaculis eu non diam phasellus vestibulum. Aliquet nec ullamcorper sit amet risus nullam eget felis. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Magnis dis parturient montes nascetur ridiculus mus mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit.',
                category: 'IA',
                date: new Date(Date.now()),
                totalSteps: 11,
                updatedAt: 1718930082,
                featured: true,
                progress: {
                    currentStep: 1,
                    completed: 1,
                },
            },
            {
                id: '694e4e5f-f25f470b-bd0e-26b1d4f64028',
                title: 'Implementación de un sistema de gestión de energía inteligente',
                slug: 'cloud',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ornare lectus sit amet est placerat in egestas erat. Non nisi est sit amet facilisis magna etiam. Faucibus interdum posuere lorem ipsum dolor. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Adipiscing vitae proin sagittis nisl rhoncus. Tincidunt eget nullam non nisi est sit amet facilisis magna. Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Cursus risus at ultrices mi tempus imperdiet nulla. Tortor vitae purus faucibus ornare suspendisse sed. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Fermentum iaculis eu non diam phasellus vestibulum. Aliquet nec ullamcorper sit amet risus nullam eget felis. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Magnis dis parturient montes nascetur ridiculus mus mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit.',
                category: 'IA',
                date: new Date(Date.now()),
                totalSteps: 11,
                updatedAt: 1718930082,
                featured: true,
                progress: {
                    currentStep: 1,
                    completed: 1,
                },
            },
            {
                id: '694e4e5f-f25-470b-bd0e-26b1d4f64028',
                title: 'Implementación de un sistema de gestión de energía inteligente',
                slug: 'cloud',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ornare lectus sit amet est placerat in egestas erat. Non nisi est sit amet facilisis magna etiam. Faucibus interdum posuere lorem ipsum dolor. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Adipiscing vitae proin sagittis nisl rhoncus. Tincidunt eget nullam non nisi est sit amet facilisis magna. Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Cursus risus at ultrices mi tempus imperdiet nulla. Tortor vitae purus faucibus ornare suspendisse sed. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Fermentum iaculis eu non diam phasellus vestibulum. Aliquet nec ullamcorper sit amet risus nullam eget felis. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Magnis dis parturient montes nascetur ridiculus mus mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit.',
                category: 'IA',
                date: new Date(Date.now()),
                totalSteps: 11,
                updatedAt: 1718930082,
                featured: true,
                progress: {
                    currentStep: 1,
                    completed: 1,
                },
            },
            {
                id: '694e4e5f-f25f-470b-bd0-26b1d4f64028',
                title: 'Implementación de un sistema de gestión de energía inteligente',
                slug: 'cloud',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ornare lectus sit amet est placerat in egestas erat. Non nisi est sit amet facilisis magna etiam. Faucibus interdum posuere lorem ipsum dolor. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Adipiscing vitae proin sagittis nisl rhoncus. Tincidunt eget nullam non nisi est sit amet facilisis magna. Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Cursus risus at ultrices mi tempus imperdiet nulla. Tortor vitae purus faucibus ornare suspendisse sed. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Fermentum iaculis eu non diam phasellus vestibulum. Aliquet nec ullamcorper sit amet risus nullam eget felis. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Magnis dis parturient montes nascetur ridiculus mus mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit.',
                category: 'IA',
                date: new Date(Date.now()),
                totalSteps: 11,
                updatedAt: 1718930082,
                featured: true,
                progress: {
                    currentStep: 1,
                    completed: 1,
                },
            },
            {
                id: '694e4e5f-f2f-470b-bd0e-26b1d4f64028',
                title: 'Implementación de un sistema de gestión de energía inteligente',
                slug: 'cloud',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ornare lectus sit amet est placerat in egestas erat. Non nisi est sit amet facilisis magna etiam. Faucibus interdum posuere lorem ipsum dolor. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Adipiscing vitae proin sagittis nisl rhoncus. Tincidunt eget nullam non nisi est sit amet facilisis magna. Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Cursus risus at ultrices mi tempus imperdiet nulla. Tortor vitae purus faucibus ornare suspendisse sed. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Fermentum iaculis eu non diam phasellus vestibulum. Aliquet nec ullamcorper sit amet risus nullam eget felis. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Magnis dis parturient montes nascetur ridiculus mus mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit.',
                category: 'IA',
                date: new Date(Date.now()),
                totalSteps: 11,
                updatedAt: 1718930082,
                featured: true,
                progress: {
                    currentStep: 1,
                    completed: 1,
                },
            },
            {
                id: '694e4e5f-f25f-470b-bd0e-6b1d4f64028',
                title: 'Implementación de un sistema de gestión de energía inteligente',
                slug: 'cloud',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ornare lectus sit amet est placerat in egestas erat. Non nisi est sit amet facilisis magna etiam. Faucibus interdum posuere lorem ipsum dolor. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Adipiscing vitae proin sagittis nisl rhoncus. Tincidunt eget nullam non nisi est sit amet facilisis magna. Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Cursus risus at ultrices mi tempus imperdiet nulla. Tortor vitae purus faucibus ornare suspendisse sed. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Fermentum iaculis eu non diam phasellus vestibulum. Aliquet nec ullamcorper sit amet risus nullam eget felis. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Magnis dis parturient montes nascetur ridiculus mus mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit.',
                category: 'IA',
                date: new Date(Date.now()),
                totalSteps: 11,
                updatedAt: 1718930082,
                featured: true,
                progress: {
                    currentStep: 1,
                    completed: 1,
                },
            },
            {
                id: '694e4e5f-f25f-470b-bd0-26b1d4f64028',
                title: 'Implementación de un sistema de gestión de energía inteligente',
                slug: 'cloud',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ornare lectus sit amet est placerat in egestas erat. Non nisi est sit amet facilisis magna etiam. Faucibus interdum posuere lorem ipsum dolor. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Adipiscing vitae proin sagittis nisl rhoncus. Tincidunt eget nullam non nisi est sit amet facilisis magna. Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Cursus risus at ultrices mi tempus imperdiet nulla. Tortor vitae purus faucibus ornare suspendisse sed. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Fermentum iaculis eu non diam phasellus vestibulum. Aliquet nec ullamcorper sit amet risus nullam eget felis. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Magnis dis parturient montes nascetur ridiculus mus mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit.',
                category: 'IA',
                date: new Date(Date.now()),
                totalSteps: 11,
                updatedAt: 1718930082,
                featured: true,
                progress: {
                    currentStep: 1,
                    completed: 1,
                },
            },
            {
                id: '694e4e5f-f25f-470b-bd0-261d4f64028',
                title: 'Implementación de un sistema de gestión de energía inteligente',
                slug: 'cloud',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ornare lectus sit amet est placerat in egestas erat. Non nisi est sit amet facilisis magna etiam. Faucibus interdum posuere lorem ipsum dolor. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Adipiscing vitae proin sagittis nisl rhoncus. Tincidunt eget nullam non nisi est sit amet facilisis magna. Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Cursus risus at ultrices mi tempus imperdiet nulla. Tortor vitae purus faucibus ornare suspendisse sed. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Fermentum iaculis eu non diam phasellus vestibulum. Aliquet nec ullamcorper sit amet risus nullam eget felis. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Magnis dis parturient montes nascetur ridiculus mus mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit.',
                category: 'IA',
                date: new Date(Date.now()),
                totalSteps: 11,
                updatedAt: 1718930082,
                featured: true,
                progress: {
                    currentStep: 1,
                    completed: 1,
                },
            },
        ];

        this.filteredCourses = [...desafios];
        this.categories = [...categorias];

        console.log(this.filteredCourses);
        console.log(this.categories);
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Filter by search query
     *
     * @param query
     */
    filterByQuery(query: string): void {
        return;
    }

    /**
     * Filter by category
     *
     * @param change
     */
    filterByCategory(change: MatSelectChange): void {
        return;
    }

    /**
     * Show/hide completed courses
     *
     * @param change
     */
    toggleCompleted(change: MatSlideToggleChange): void {
        return;
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any {
        return item.id || index;
    }
}
