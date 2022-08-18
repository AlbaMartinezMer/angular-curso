import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1> {{ titulo }} </h1>

        <h3>La base es: <strong> {{ base }} </strong></h3>

        <button (click)="acumular( base )"> + {{ base }} </button>

        <span> {{ numero }} </span>

        <button (click)="acumular( -base )"> - {{ base }} </button>
        `

})
//tambien podiamos hacer lo de templateUrl y crear un .html donde estuviera eso 

export class ContadorComponent{
    //title = 'bases'; --> en app.component.html ponemos <h1> {{title}} </h1> y en el navegador saldra el string bases
    titulo: string = 'Contador App';
    numero: number = 10;
    base: number = 5;

    acumular( valor: number ){
        this.numero += valor;
    }
    
}