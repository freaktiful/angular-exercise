import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    /* el testbed se ejecuta para asegurarnos de que se configura un testing module.
    Es que como son pruebas unitarias solo se prueba un módulo, pero claro, los módulos
    tienen dependencias. Así que el testbed le da el entorno que necesita dentro del 
    entorno de testing unitario */
    TestBed.configureTestingModule({
      /* y se configura de la misma forma que se configura un módulo normal */
      /* para el routing ya te da Angular el RouterTestingModule, para que te desentiendas del 
      enrutamient - porque esto son pruebas unitarias - pero no de error de importación */
      /* el modulo de pruebas de un componente se va a parecer mucho al módulo en el que vive el 
      componente */
      imports: [
        RouterTestingModule,
        CoreModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
