import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.sass']
})
export class BasicosComponent {

  nombreLower : string = 'pedro'
  nombreUpper : string = 'PEDRO'
  nombreCompleto : string = 'PeDro MoYAno'

  fecha : Date = new Date();
  
}
