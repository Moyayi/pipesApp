import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.sass']
})
export class NoComunesComponent {

  //i18nSelect
  nombre : string = "Pedro";
  genero : string = "masculino";
  toggleGenre : boolean = false;

  invitacionMap = {
    'masculino' : 'invitarlo',
    'femenino'  : 'invitarla'
  }

  //i18nPlural

  clientes : string[] = ['Maria', 'Paco', 'Antonio', 'Jose', 'Juan', 'Victoria']
  clientesMap = {
    '=0' : 'no ningún cliente esperando.',
    '=1' : 'un cliente esperando.',
    'other' : '# clientes esperando.'
  }

  cambiarCliente(){
    
    if(this.toggleGenre){
      this.nombre = "Pedro"
      this.genero = "masculino"
    }else{
      this.nombre = "Maria"
      this.genero = "femenino"
    }
    this.toggleGenre = !this.toggleGenre;
  }

  borrarCliente(){
    this.clientes.pop();
  }



  // KeyValue Pipe

  persona = {
    nombre : 'Pedro',
    edad : 26,
    direccion : 'Cádiz'
  }

  heroes = [
    {
      nombre : 'Superman',
      vuela : true
    },
    {
      nombre : 'Batman',
      vuela : false
    },
    {
      nombre : 'Spiderman',
      vuela : false
    },
    {
      nombre : 'Ironman',
      vuela : true
    }
  ]

  miObservable = interval(1000);
  
  valorPromesa = new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve('Fin de la promesa')
    }, 3500)
  })
}
