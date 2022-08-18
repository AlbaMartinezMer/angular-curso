import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})

export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];

  heroeBorrado: string = '';


  borrarHeroe() {
    const heroeBorrado = this.heroes.shift() || ''; //para que no llore con lo del undefined
    //console.log(heroeBorrado);
    this.heroeBorrado = heroeBorrado; //this.heroeBorrado hace referencia al heroeBorrado de la clase, heroeBorrado normal es el del metodo
  }
}
