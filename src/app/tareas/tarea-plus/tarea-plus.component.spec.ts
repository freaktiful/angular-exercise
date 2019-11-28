import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaPlusComponent } from './tarea-plus.component';
import { TareaSimpleComponent } from '../tarea-simple/tarea-simple.component';
import { NuevaComponent } from '../nueva/nueva.component';
import { TareaComponent } from '../tarea/tarea.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TareasModule } from '../tareas.module';

describe('TareaPlusComponent', () => {
  let component: TareaPlusComponent;
  let fixture: ComponentFixture<TareaPlusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareaPlusComponent, NuevaComponent, TareaComponent ],
      imports: [ ReactiveFormsModule, FormsModule, FontAwesomeModule, TareasModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
