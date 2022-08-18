import { NgModule } from "@angular/core";

import { ContadorComponent } from './contador/contador.component';


@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [
        ContadorComponent, //para poder utilizarlo fuera del modulo
    ]
})



export class ContadorModule{

}