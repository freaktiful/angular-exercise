import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestacarDirective } from './destacar.directive';
import { HacerEditableDirective } from './hacer-editable.directive';
import { TruncarPipe } from './truncar.pipe';



@NgModule({
  declarations: [DestacarDirective, HacerEditableDirective, TruncarPipe],
  imports: [
    CommonModule
  ],
  exports: [
    DestacarDirective,
    HacerEditableDirective,
    TruncarPipe
  ]
})
export class SharedModule { }
