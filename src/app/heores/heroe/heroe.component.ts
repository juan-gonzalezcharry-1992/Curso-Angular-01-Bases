import { Component, NgModule } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html',
    styleUrls:['heroe.component.css']
})
export class HeroeComponent {
    nombre: string = 'Iron Man';
    edad: number = 45;
    get NombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }
    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(): void {
        this.nombre = "Batman";
    }

    cambiarEdad(): void {
        this.edad = 32;
    }
}