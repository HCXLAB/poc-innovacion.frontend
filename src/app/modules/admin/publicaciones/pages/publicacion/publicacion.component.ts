import { CdkScrollable } from '@angular/cdk/scrolling';
import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink } from '@angular/router';
import { FuseFindByKeyPipe } from '@fuse/pipes/find-by-key';
import { Idea } from '../../models/publicaciones';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PublicacionesComponent } from "../publicaciones/publicaciones.component";
import { FormularioComponent } from "../../../formulario/pages/formulario/formulario.component";
import { PropuestasComponent } from "../../../propuestas/pages/propuestas/propuestas.component";

@Component({
    selector: 'app-publicacion',
    standalone: true,
    templateUrl: './publicacion.component.html',
    styleUrl: './publicacion.component.scss',
    imports: [
        MatSidenavModule,
        RouterLink,
        MatIconModule,
        NgClass,
        MatButtonModule,
        MatProgressBarModule,
        CdkScrollable,
        MatTabsModule,
        FuseFindByKeyPipe,
        MatFormFieldModule,
        PublicacionesComponent,
        FormularioComponent,
        PropuestasComponent
    ]
})
export class PublicacionComponent {
  data = `
  <p class="lead">
Chatbot con IA para autoatención en RRHH
  </p>

  <p>
      Amet distinctio enim itaque minima minus nesciunt recusandae soluta voluptatibus:
  </p>
  <blockquote>
      <p>
          Ad aliquid amet asperiores lab distinctio doloremque <code>eaque</code>, exercitationem explicabo, minus mollitia
          natus necessitatibus odio omnis pofro rem.
      </p>
  </blockquote>
  <p>
      Alias architecto asperiores, dignissimos illum ipsam ipsum itaque, natus necessitatibus officiis, perferendis quae
      sed ullam veniam vitae voluptas! Magni, nisi, quis! A <code>accusamus</code> animi commodi, consectetur distinctio
      eaque, eos excepturi illum laboriosam maiores nam natus nulla officiis perspiciatis rem <em>reprehenderit</em> sed
      tenetur veritatis.
  </p>
  
  <figure>
      <img
          src="images/pages/help-center/image-1.jpg"
          alt="">
      <figcaption>
          Accusamus blanditiis labque delectus esse et eum excepturi, impedit ipsam iste maiores minima mollitia, nihil obcaecati
          placeat quaerat qui quidem sint unde!
      </figcaption>
  </figure>
  <p>
      A beatae lab deleniti explicabo id inventore magni nisi omnis placeat praesentium quibusdam:
  </p>
  <ul>
      <li>Dolorem eaque laboriosam omnis praesentium.</li>
      <li>Atque debitis delectus distinctio doloremque.</li>
      <li>Fuga illo impedit minima mollitia neque obcaecati.</li>
  </ul>  
  <table class="table table-striped table-bordered">
      <thead>
          <tr>
              <th>Wrestler</th>
              <th>Origin</th>
              <th>Finisher</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>Bret “The Hitman” Hart</td>
              <td>Calgary, AB</td>
              <td>Sharpshooter</td>
          </tr>
          <tr>
              <td>Stone Cold Steve Austin</td>
              <td>Austin, TX</td>
              <td>Stone Cold Stunner</td>
          </tr>
          <tr>
              <td>Randy Savage</td>
              <td>Sarasota, FL</td>
              <td>Elbow Drop</td>
          </tr>
          <tr>
              <td>Vader</td>
              <td>Boulder, CO</td>
              <td>Vader Bomb</td>
          </tr>
          <tr>
              <td>Razor Ramon</td>
              <td>Chuluota, FL</td>
              <td>Razor’s Edge</td>
          </tr>
      </tbody>
  </table>
 
  
  `;

  publicacion ={
    id: '694e4e5f-f25f-470b-bd0e-26b1d4f64028',
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
        completed: 0,
    },
}

}
