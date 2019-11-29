import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApigoogleComponent } from './apigoogle.component';

describe('ApigoogleComponent', () => {
  let component: ApigoogleComponent;
  let fixture: ComponentFixture<ApigoogleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApigoogleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApigoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
