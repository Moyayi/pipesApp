import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'pipesApp';

  constructor(){}

  nombre : string = "Anonimo"
  valor : number = 10000
  obj : Object = {
    nombre : "Pedro",
    edad : 25
  }
  mostrarNombre(){
    this.nombre = "Pedro"
  }
}
