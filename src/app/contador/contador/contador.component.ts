import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
            <h1>{{titulo}}</h1>

            <h2>La base es <strong>{{base}}</strong></h2>
            <button (click)="acumular(base);"> + {{base}} </button>
            <span> {{numero}} </span>

            <button (click)="acumular(-base)"> - {{base}}</button>
`,
styleUrls: ['../../app.component.css']
})
export class ContadorComponent {
    public titulo: string = 'Contador app';
    public numero: number = 10;
    public base: number = 5;


    acumular(valor: number) {
        this.numero += valor;
    }
}