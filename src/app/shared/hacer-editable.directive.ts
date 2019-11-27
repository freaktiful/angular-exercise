import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[aubHacerEditable]'
})
export class HacerEditableDirective implements OnInit {

  @Input() aubHacerEditable: boolean;

  constructor(private element: ElementRef) {

  }

  ngOnInit() {
    /**la asignación nos interesa que no solo se haga al ppio sino cada vez que cambie
     * el valor de la variable.
     */
    this.element.nativeElement.setAttribute('contenteditable', this.aubHacerEditable)
  }

  /**esto se llama cuando cambia el valor */
  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.element.nativeElement.setAttribute('contenteditable', this.aubHacerEditable)
    
  }

}
