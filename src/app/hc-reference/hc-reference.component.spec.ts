import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HcReferenceComponent } from './hc-reference.component';

describe('HcReferenceComponent', () => {
  let component: HcReferenceComponent;
  let fixture: ComponentFixture<HcReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HcReferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HcReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
