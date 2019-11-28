import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaSimpleComponent } from './tarea-simple.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TareasModule } from '../tareas.module';
import { SharedModule } from 'src/app/shared/shared.module';

describe('TareaSimpleComponent', () => {
  let component: TareaSimpleComponent;
  let fixture: ComponentFixture<TareaSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareaSimpleComponent ],
      imports: [ FormsModule, FontAwesomeModule, SharedModule, TareasModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
