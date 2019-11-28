import { DestacarDirective } from './destacar.directive';
import { ElementRef, Component } from '@angular/core';
import { TestBed, ComponentFixture, TestComponentRenderer } from '@angular/core/testing'
import { By } from '@angular/platform-browser';


@Component({
  template: `<p id="test" aubDestacar></p>`
})
class TestComponent{
}

describe('DestacarDirective', () => {

  let element: ElementRef; 
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        DestacarDirective
      ]
    }).compileComponents();
    
    fixture = TestBed.createComponent(TestComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();
    element = fixture.debugElement.query(By.css('#test'))
  })

  it('should create an instance', () => {
    const directive = new DestacarDirective(element);
    /** hay que pasarle un valor al constructor porque es obligatorio pero Angular
     * no lo coloca. Una forma de solucionarlo sería hacer opcional el parámetro, 
     * pero eso no tiene mucho sentido. Otra forma es hacerlo aquí, en el test.
     * (creando la variable element y pasándosela. Y con eso ya basta.)
     */
    expect(directive).toBeTruthy();
  });
});

/**
 * pero solo declarar no vale, hay que darle un valor, porque si no, no salen bien los tests
 * (está explicado en las transparencias)
 * 
 * hay que crear un componente de prueba con un template que use la directiva. Y se crea
 * el componente para los tests.
 */
