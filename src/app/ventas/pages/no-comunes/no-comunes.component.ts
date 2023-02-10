import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.sass']
})
export class NoComunesComponent {

  //i18nSelect
  nombre : string = "Pedro";
  genero : string = "masculino";

  invitacionMap = {
    'masculino' : 'invitarlo',
    'femenino'  : 'invitarla'
  }

  //i18nPlural

  clientes : string[] = ['Maria', 'Paco', 'Antonio']
  clientesMap = {
    '=0' : 'no tenemos ningún cliente esperando.',
    '=1' : 'tenemos un cliente esperando.',
    'other' : 'tenemos # clientes esperando.'
  }
}
