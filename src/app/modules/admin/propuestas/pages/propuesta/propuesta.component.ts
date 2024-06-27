import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FuseCardComponent } from "../../../../../../@fuse/components/card/card.component";
import { MatIconModule } from '@angular/material/icon';
import { NgClass, TitleCasePipe } from '@angular/common';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { TextFieldModule } from '@angular/cdk/text-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { ComentariosComponent } from "../../../comentarios/pages/comentarios/comentarios.component";

@Component({
    selector: 'app-propuesta',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    templateUrl: './propuesta.component.html',
    styleUrl: './propuesta.component.scss',
    imports: [
        MatButtonModule,
        FormsModule,
        FuseCardComponent,
        MatButtonModule,
        MatIconModule,
        RouterLink,
        NgClass,
        MatMenuModule,
        MatCheckboxModule,
        MatProgressBarModule,
        MatFormFieldModule,
        MatInputModule,
        TextFieldModule,
        MatDividerModule,
        MatTooltipModule,
        TitleCasePipe,
        ComentariosComponent
    ]
})
export class PropuestaComponent {

}
