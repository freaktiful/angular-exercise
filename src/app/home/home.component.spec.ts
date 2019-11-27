import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { SaludoComponent } from './saludo/saludo.component';
import { SaludoRefComponent } from './saludo-ref/saludo-ref.component';
import { SaludoRxComponent } from './saludo-rx/saludo-rx.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, SaludoComponent, SaludoRefComponent, SaludoRxComponent ],
      imports: [ NgbModule, FormsModule, ReactiveFormsModule ]
    })
    .compileComponents();
  }));

  /* con las importaciones coges cosas de terceros, pero declaraciones son módulos que están dentro
  del módulo, no hay que importarlas sino declararlas */

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
