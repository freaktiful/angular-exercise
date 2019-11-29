import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripComponent } from './inscrip.component';

describe('InscripComponent', () => {
  let component: InscripComponent;
  let fixture: ComponentFixture<InscripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
