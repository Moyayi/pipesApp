import { NgModule } from '@angular/core';

// Modules of PrimeNG
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import { MenuComponent } from '../shared/menu/menu.component';


@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
  ]
})
export class PrimeNgModule { }
