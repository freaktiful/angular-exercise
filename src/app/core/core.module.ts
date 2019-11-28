import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    MenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [HeaderComponent, FooterComponent]
  //no exporta MenuComponent porque solo se va a usar dentro del modulo 
})
export class CoreModule { }

/* las declaraciones son los componentes que tiene dentro */
