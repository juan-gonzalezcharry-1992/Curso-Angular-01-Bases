import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Batman', 'Superman', 'Flash', 'Acuaman', 'Mujer Maravilla'];
  heroeBorrado: string = "";
  borraHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';

  }

}
