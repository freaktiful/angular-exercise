import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestacarDirective } from './destacar.directive';
import { HacerEditableDirective } from './hacer-editable.directive';



@NgModule({
  declarations: [DestacarDirective, HacerEditableDirective],
  imports: [
    CommonModule
  ],
  exports: [
    DestacarDirective,
    HacerEditableDirective
  ]
})
export class SharedModule { }
