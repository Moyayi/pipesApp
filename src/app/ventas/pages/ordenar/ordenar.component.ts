import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.sass']
})
export class OrdenarComponent {

  buttonMayus : boolean = false;
  ordenarPor = ""
  heroe : Heroe [] = [
    {
      nombre : 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre : 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre : 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre : 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre : 'Linterna Verde',
      vuela: true,
      color: Color.verde
    },
  ]

  toggleMayus(){
    this.buttonMayus = !this.buttonMayus;
  }

  toggleBusqueda( valor : string ){
    this.ordenarPor = valor;
  }
}
