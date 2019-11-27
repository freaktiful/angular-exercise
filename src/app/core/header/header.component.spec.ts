import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';
import { MenuComponent } from 'src/app/core/menu/menu.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
 /* un componente en angular se instancia cuando declarativamente usamos su referal en 
 un html <aub-header>. No hay un new Componente. El entorno de pruebas nos proporciona
 una fixture, que es una factory que puede instanciar componentes como haría el sistema
 cuando se lo pides por html. Y para las pruebas pues lo instancia para poder
 probarlo. */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent, MenuComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    /* así para los tests tengo una variable component que es la instancia del componente */
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as titulo 'Curso de Angular'`, () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const app = fixture.debugElement.componentInstance;
    expect(component.titulo).toEqual('Curso de Angular');
  });

  it('should render title', () => {
    /* se puede obtener la vista del componente con esta instrucción */
    const rendered = fixture.debugElement.nativeElement;
    /* ahora rendered es un objeto del DOM */
    expect(rendered.querySelector('h1').textContent).toContain('Angular');
  });
});


/* pruebas contra el DOM a través de fixture.debugElement.naviteElement
y contra el componente con fixture.componentInstance */