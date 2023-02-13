import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes : Heroe[], orderPor : string = "sin valor", valueOrder : boolean = false): Heroe[] {
    console.log(valueOrder)
    switch (orderPor.toLowerCase()) {
      case "vuela":
        valueOrder ? 
          heroes = heroes.sort(
            (a) => a.vuela ? 1 : -1
          ) 
        :
          heroes = heroes.sort(
            (a) => a.vuela ? -1 : 1
          )
        return heroes;

      case "color":
        valueOrder ? 
          heroes = heroes.sort(
            (a,b) => (a.color > b.color) ? 1 : -1
          )
        :
          heroes = heroes.sort(
            (a,b) => (a.color < b.color) ? 1 : -1
          )
        return heroes;


      default:
        valueOrder ? 
          heroes = heroes.sort( 
            (a,b) => (a.nombre < b.nombre) ? 1 : -1
          )
        :
          heroes = heroes.sort( 
            (a,b) => (a.nombre > b.nombre) ? 1 : -1
          )
        return heroes;
    }
    

  }

}
