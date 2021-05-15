import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HcItnryComponent } from './hc-itnry.component';

describe('HcItnryComponent', () => {
  let component: HcItnryComponent;
  let fixture: ComponentFixture<HcItnryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HcItnryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HcItnryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
