import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByServicioComponent } from './by-servicio.component';

describe('ByServicioComponent', () => {
  let component: ByServicioComponent;
  let fixture: ComponentFixture<ByServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
