import { Component } from '@angular/core';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  title = 'angular';
  whatIs = `El Haidong Gumdo es un arte marcial Coreano, enfocado en el manejo de la espada
  Haidong Gumdo significa “El Camino de la Espada del Mar del Este”; se basa en técnicas y tácticas de lucha contra
  varios oponentes. En su práctica se enfatiza la movilidad, la agilidad de movimientos, la defensa y el ataque en
  todas direcciones. El principal enfoque es la armonía y fluidez de movimientos en el manejo de la espada, sin
  embargo hay técnicas de combate sin el uso de la misma, éstas técnicas se enseñan conforme avanza el nivel`;
  
  ionite: string;
}
