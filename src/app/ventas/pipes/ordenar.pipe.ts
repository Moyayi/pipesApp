import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes : Heroe[], orderPor : string = "sin valor"): Heroe[] {
    switch (orderPor.toLowerCase()) {
      case "vuela":
        heroes = heroes.sort(
          (a) => a.vuela ? -1 : 1
        )
        return heroes;

      case "color":
        heroes = heroes.sort(
          (a,b) => (a.color > b.color) ? 1 : -1
        )
        return heroes;


      default:
        heroes = heroes.sort( 
          (a,b) => (a.nombre > b.nombre) ? 1 : -1
        );
        return heroes;
    }
    

  }

}
