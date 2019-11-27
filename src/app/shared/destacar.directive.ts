import { Directive, OnInit, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[aubDestacar]'
})
export class DestacarDirective implements OnInit {

  /**se le puede pasar información declarando una variable @Input con el mismo nombre
   * que el selector, y en el html se le puede poner ="" y así se le pasa valor.
   * 
   * Solo puede tener uno, pero como ese uno puede ser del tipo que sea, se pueden
   * meter los valores que sean mientras estén dentro de un objeto
   */
  @Input() aubDestacar: string;

  /* el constructor es capaz de recoger la referencia al elemento en el que se pone la directiva */
  constructor(private element: ElementRef) { 
    console.log("directiva destacar")
    console.dir(this.element);
  }


  ngOnInit(){
    console.log(this.aubDestacar)
    this.element.nativeElement.innerHTML +=
    `<div class="destacar color-destacar"> ${this.aubDestacar}</div>`
  }

  @HostListener('click')
  cambiarColor(){
    this.element.nativeElement.children[0]
      .classList.toggle('color-destacar')
      //el toggle, si tiene la clase la quita, y si no la tiene la pone.
  }
  /** también se le pueden poner decoradores a los métodos.
   * Como no se le puede poner un onclick a una directiva, se le pone un 
   * @HostListerner('click') y se dispara al hacer click
   */

   /**
    * y así se pueden gestionar eventos mediante directivas
    */

}


/**las directivas nos dan acceso directo al DOM sin tener que programarlo por otro lado. */