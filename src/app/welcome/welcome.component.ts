import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  /**
   *
   */
  constructor(private meta: Meta) {

    meta.addTag({ property: 'og:url', content: 'https://haidong-kids.herokuapp.com/' })
    meta.addTag({ property: 'og:type', content: 'website' })
    meta.addTag({ property: 'og:title', content: 'Haidong Gumdo Kids' })
    meta.addTag({ property: 'og:description', content: 'El Haidong Gumdo es un arte marcial Coreano, enfocado en el manejo de la espada, Haidong Gumdo significa “El Camino de la Espada del Mar del Este' })
    meta.addTag({ property: 'og:image', content: 'https://haidong-kids.herokuapp.com/assets/img/hdgkids.png' })
  }
  title = 'angular';
  whatIs = `El Haidong Gumdo es un arte marcial Coreano, enfocado en el manejo de la espada
  Haidong Gumdo significa “El Camino de la Espada del Mar del Este”; se basa en técnicas y tácticas de lucha contra
  varios oponentes. En su práctica se enfatiza la movilidad, la agilidad de movimientos, la defensa y el ataque en
  todas direcciones. El principal enfoque es la armonía y fluidez de movimientos en el manejo de la espada, sin
  embargo hay técnicas de combate sin el uso de la misma, éstas técnicas se enseñan conforme avanza el nivel`;

  ionite: string;
}
